import SibApiV3Sdk from "sib-api-v3-sdk";

export const ENV = {
  appId: process.env.VITE_APP_ID ?? "",
  cookieSecret: process.env.JWT_SECRET ?? "",
  databaseUrl: process.env.DATABASE_URL ?? "",
  oAuthServerUrl: process.env.OAUTH_SERVER_URL ?? "",
  ownerOpenId: process.env.OWNER_OPEN_ID ?? "",
  isProduction: process.env.NODE_ENV === "production",
  forgeApiUrl: process.env.BUILT_IN_FORGE_API_URL ?? "",
  forgeApiKey: process.env.BUILT_IN_FORGE_API_KEY ?? "",
};

export async function sendContactEmail(data: {
  fullName: string;
  email: string;
  phone: string;
  courseInterest?: string | null;
  message?: string | null;
  formType: "book_free_class" | "book_expo_slot";
}) {
  // 1. Fetch the API key dynamically when the function runs
  const brevoApiKey = process.env.BREVO_API_KEY;

  if (!brevoApiKey) {
    throw new Error("BREVO_API_KEY is not defined in GoDaddy environment variables.");
  }

  // 2. Initialize Brevo client inside the execution scope
  const client = SibApiV3Sdk.ApiClient.instance;
  const apiKeyAuth = client.authentications["api-key"];
  apiKeyAuth.apiKey = brevoApiKey;

  const emailApi = new SibApiV3Sdk.TransactionalEmailsApi();

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
    const sendSmtpEmail = new SibApiV3Sdk.SendSmtpEmail();
    sendSmtpEmail.sender = {
      name: "Stemora",
      email: "stemoraeducation@gmail.com",
    };
    sendSmtpEmail.to = [
      {
        email: "stemoraeducation@gmail.com",
      },
    ];
    sendSmtpEmail.replyTo = {
      email: data.email,
    };
    sendSmtpEmail.subject = subject;
    sendSmtpEmail.htmlContent = htmlContent;

    const result = await emailApi.sendTransacEmail(sendSmtpEmail);

    console.log("Email sent successfully:", result);
    return result;
  } catch (err) {
    console.error("Brevo Error:", err);
    throw err;
  }
}