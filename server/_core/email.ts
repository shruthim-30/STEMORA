import SibApiV3Sdk from "sib-api-v3-sdk";

const client = SibApiV3Sdk.ApiClient.instance;

const apiKey = client.authentications["api-key"];
apiKey.apiKey = process.env.BREVO_API_KEY!;

const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

export async function sendContactEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  courseInterest?: string | null;
  message?: string | null;
  formType: "book_free_class" | "book_expo_slot";
}) {
  const subject =
    data.formType === "book_free_class"
      ? "New Free Class Booking – Stemora"
      : "New Expo Slot Booking – Stemora";

  const htmlContent = `
    <h2>${subject}</h2>

    <p><b>Name:</b> ${data.fullName}</p>
    <p><b>Email:</b> ${data.email}</p>
    <p><b>Phone:</b> ${data.phone}</p>
    <p><b>Course:</b> ${data.courseInterest ?? "Not specified"}</p>
    <p><b>Message:</b> ${data.message ?? "No message"}</p>

    <hr/>

    <p>This enquiry was submitted through the Stemora website.</p>
  `;

  try {
    const result = await emailApi.sendTransacEmail({
      sender: {
        name: "Stemora",
        email: "stemoraeducation@gmail.com",
      },
      to: [
        {
          email: "stemoraeducation@gmail.com",
        },
      ],
      replyTo: {
        email: data.email,
      },
      subject,
      htmlContent,
    });

    console.log("Email sent successfully");
    console.log(result);
  } catch (err) {
    console.error("Brevo Error:", err);
    throw err;
  }
}