import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, router } from "./_core/trpc";
import { z } from "zod";
import { createContactSubmission } from "./db";
import { notifyOwner } from "./_core/notification";
import { sendContactEmail } from "./_core/email";
import { TRPCError } from "@trpc/server";

export const appRouter = router({
    // if you need to use socket.io, read and register route in server/_core/index.ts, all api should start with '/api/' so that the gateway can route correctly
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  contact: router({
    submitForm: publicProcedure
      .input(
        z.object({
          fullName: z.string().min(1, 'Full name is required'),
          email: z.string().email('Invalid email address'),
          phone: z.string().min(1, 'Phone number is required'),
          courseInterest: z.string().optional(),
          message: z.string().optional(),
          formType: z.enum(['book_free_class', 'book_expo_slot']),
        })
      )
      .mutation(async ({ input }) => {
        try {
          await createContactSubmission({
            fullName: input.fullName,
            email: input.email,
            phone: input.phone,
            courseInterest: input.courseInterest || null,
            message: input.message || null,
            formType: input.formType,
          });

          // Send email notification to owner
          try {
            await sendContactEmail({
              fullName: input.fullName,
              email: input.email,
              phone: input.phone,
              courseInterest: input.courseInterest,
              message: input.message,
              formType: input.formType,
            });
          } catch (emailError) {
            console.error('Failed to send email:', emailError);
            // We don't throw here to ensure the form submission is still considered successful in DB
          }

          // Also keep the internal notification if configured
          try {
            await notifyOwner({
              title: `New ${input.formType === 'book_free_class' ? 'Free Class' : 'Expo Slot'} Booking`,
              content: `Name: ${input.fullName}\nEmail: ${input.email}\nPhone: ${input.phone}\nCourse Interest: ${input.courseInterest || 'Not specified'}\nMessage: ${input.message || 'No message'}`,
            });
          } catch (notifyError) {
            console.warn('Internal notification failed:', notifyError);
          }

          return { success: true };
        } catch (error) {
          console.error('Failed to submit contact form:', error);
          throw new TRPCError({
            code: 'INTERNAL_SERVER_ERROR',
            message: 'Failed to submit form. Please try again.',
          });
        }
      }),
  }),
});

export type AppRouter = typeof appRouter;
