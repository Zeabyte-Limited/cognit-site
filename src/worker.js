// Cloudflare Worker: serves the static site + handles POST /api/lead.
// Leads are emailed via Amazon SES (domain zeabyte.co.nz is verified in
// ap-southeast-2). AWS creds live in Worker secrets, never in code.
import { AwsClient } from "aws4fetch";

const TO_ADDRESS = "contact@zeabyte.co.nz";
const FROM_ADDRESS = "noreply@zeabyte.co.nz";

function esc(s) {
  return String(s || "").slice(0, 2000);
}

async function handleLead(request, env) {
  let data;
  try {
    data = await request.json();
  } catch {
    return Response.json({ ok: false, error: "bad json" }, { status: 400 });
  }

  // Honeypot: real users never fill this hidden field.
  if (data.botcheck) return Response.json({ ok: true });

  const name = esc(data.name);
  const company = esc(data.company);
  const email = esc(data.email);
  const phone = esc(data.phone);
  const interest = esc(data.interest);
  const message = esc(data.message);

  if (!name || !email) {
    return Response.json({ ok: false, error: "missing fields" }, { status: 400 });
  }

  const region = env.SES_REGION || "ap-southeast-2";
  const aws = new AwsClient({
    accessKeyId: env.AWS_ACCESS_KEY_ID,
    secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
    service: "ses",
    region,
  });

  const body = [
    "New demo request from cognitsystem.com",
    "",
    `Name:       ${name}`,
    `Company:    ${company}`,
    `Email:      ${email}`,
    `Phone:      ${phone}`,
    `Interested: ${interest}`,
    "",
    "Message:",
    message || "(none)",
  ].join("\n");

  const res = await aws.fetch(
    `https://email.${region}.amazonaws.com/v2/email/outbound-emails`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        FromEmailAddress: `Cognit System <${FROM_ADDRESS}>`,
        Destination: { ToAddresses: [TO_ADDRESS] },
        ReplyToAddresses: email ? [email] : [],
        Content: {
          Simple: {
            Subject: { Data: `🟢 Cognit demo request — ${company || name}` },
            Body: { Text: { Data: body } },
          },
        },
      }),
    }
  );

  if (!res.ok) {
    const detail = await res.text();
    console.log("SES error", res.status, detail);
    return Response.json({ ok: false, error: "send failed" }, { status: 502 });
  }
  return Response.json({ ok: true });
}

// Friendly short-URL redirects → canonical pages.
const REDIRECTS = {
  "/demo": "/contact",
  "/book-a-demo": "/contact",
  "/store": "/ecommerce",
  "/online-store": "/ecommerce",
  "/modules": "/features",
  "/erp": "/platform",
};

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/lead" && request.method === "POST") {
      return handleLead(request, env);
    }
    const path = url.pathname.replace(/\/$/, "");
    if (REDIRECTS[path]) {
      return Response.redirect(url.origin + REDIRECTS[path], 301);
    }
    return env.ASSETS.fetch(request);
  },
};
