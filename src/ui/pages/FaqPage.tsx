import { Seo } from "./seo";
import { Container } from "../components/Container";
import { Card } from "../components/Card";

const faqs = [
  { q: "How do I create an account?", a: "Go to Sign up, fill your details, and verify via email/OTP (mocked here)." },
  { q: "How does verification work?", a: "In production, you can implement phone/email/NID and photo review workflows." },
  { q: "Can I hide my contact details?", a: "Yes, privacy by default. Contacts can be unlocked via premium." },
  { q: "How do packages work?", a: "Packages unlock additional features like contact visibility and priority support." }
];

export function FaqPage() {
  return (
    <>
      <Seo title="FAQ — Alif Marriage Media" />
      <Container className="py-10">
        <h1 className="text-2xl font-semibold">FAQ</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">Common questions for users & admins.</p>

        <div className="mt-6 grid gap-4">
          {faqs.map((f) => (
            <Card key={f.q} className="p-6">
              <div className="text-base font-semibold">{f.q}</div>
              <div className="mt-2 text-sm text-[rgb(var(--muted))]">{f.a}</div>
            </Card>
          ))}
        </div>
      </Container>
    </>
  );
}
