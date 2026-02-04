import { Seo } from "./seo";
import { Container } from "../components/Container";
import { Card } from "../components/Card";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useState } from "react";
import { toast } from "sonner";

export function ContactPage() {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <Seo title="Contact — Alif Marriage Media" />
      <Container className="py-10">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <p className="mt-2 text-sm text-[rgb(var(--muted))]">A simple contact form skeleton.</p>

        <Card className="mt-6 p-6">
          <div className="grid gap-4 md:grid-cols-2">
            <Input label="Name" placeholder="Your name" />
            <Input label="Email" placeholder="you@email.com" />
            <div className="md:col-span-2">
              <Input label="Subject" placeholder="How can we help?" />
            </div>
            <div className="md:col-span-2">
              <label className="block">
                <div className="mb-1 text-sm text-[rgb(var(--muted))]">Message</div>
                <textarea className="min-h-32 w-full rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--card))] p-3 text-sm outline-none focus:ring-2 focus:ring-[rgb(var(--ring))]" />
              </label>
            </div>
          </div>

          <div className="mt-5 flex gap-3">
            <Button
              isLoading={loading}
              onClick={async () => {
                setLoading(true);
                await new Promise((r) => setTimeout(r, 700));
                setLoading(false);
                toast.success("Message sent (mock)");
              }}
            >
              Send
            </Button>
            <Button variant="secondary" onClick={() => toast.message("Phone: +880 1XXXXXXXXX (placeholder)")}>
              Call
            </Button>
          </div>
        </Card>
      </Container>
    </>
  );
}
