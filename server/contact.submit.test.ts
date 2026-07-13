import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// ✅ Mock internal notification
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true),
}));

// ✅ Mock email sending (Resend)
vi.mock("./_core/email", () => ({
  sendContactEmail: vi.fn().mockResolvedValue(true),
}));

function createPublicContext(): TrpcContext {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return ctx;
}

describe("contact.submitForm", () => {
  it("successfully submits a book_free_class form with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submitForm({
      fullName: "John Doe",
      email: "john@example.com",
      phone: "+1 (555) 123-4567",
      courseInterest: "Robotics Base Course",
      message: "I am interested in learning robotics",
      formType: "book_free_class",
    });

    expect(result).toEqual({ success: true });
  });

  it("successfully submits a book_expo_slot form with valid data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submitForm({
      fullName: "Jane Smith",
      email: "jane@example.com",
      phone: "+1 (555) 987-6543",
      courseInterest: undefined,
      message: "Interested in the robotics expo",
      formType: "book_expo_slot",
    });

    expect(result).toEqual({ success: true });
  });

  it("validates required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submitForm({
        fullName: "",
        email: "test@example.com",
        phone: "+1 (555) 123-4567",
        courseInterest: undefined,
        message: undefined,
        formType: "book_free_class",
      })
    ).rejects.toHaveProperty("code", "BAD_REQUEST");
  });

  it("validates email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.contact.submitForm({
        fullName: "Test User",
        email: "invalid-email",
        phone: "+1 (555) 123-4567",
        courseInterest: undefined,
        message: undefined,
        formType: "book_free_class",
      })
    ).rejects.toHaveProperty("code", "BAD_REQUEST");
  });

  it("accepts optional fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.contact.submitForm({
      fullName: "Test User",
      email: "test@example.com",
      phone: "+1 (555) 123-4567",
      courseInterest: undefined,
      message: undefined,
      formType: "book_free_class",
    });

    expect(result).toEqual({ success: true });
  });
});
