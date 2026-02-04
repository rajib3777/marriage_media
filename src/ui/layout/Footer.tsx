import { Link } from "react-router-dom";
import { Container } from "../components/Container";

export function Footer() {
  return (
    <footer className="border-t border-[rgb(var(--border))] bg-[rgb(var(--bg))]">
      <Container className="py-10">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img src="/assets/logo.jpg" alt="logo" className="h-10 w-10 rounded-xl object-cover" />
              <div>
                <div className="text-sm font-semibold">Alif Marriage Media</div>
                <div className="text-xs text-[rgb(var(--muted))]">Secure, verified matchmaking</div>
              </div>
            </div>
            <p className="mt-4 text-sm text-[rgb(var(--muted))]">
              A production-grade frontend skeleton for a large-scale matrimonial platform: search, profiles,
              packages, and a full auth + app area.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Company</div>
            <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
              <li><Link to="/about" className="hover:text-[rgb(var(--fg))]">About</Link></li>
              <li><Link to="/contact" className="hover:text-[rgb(var(--fg))]">Contact</Link></li>
              <li><Link to="/faq" className="hover:text-[rgb(var(--fg))]">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Product</div>
            <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
              <li><Link to="/search" className="hover:text-[rgb(var(--fg))]">Advanced Search</Link></li>
              <li><Link to="/packages" className="hover:text-[rgb(var(--fg))]">Premium Packages</Link></li>
              <li><Link to="/profiles" className="hover:text-[rgb(var(--fg))]">Browse Profiles</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Policies</div>
            <ul className="mt-3 space-y-2 text-sm text-[rgb(var(--muted))]">
              <li><span className="cursor-not-allowed opacity-70">Privacy Policy</span></li>
              <li><span className="cursor-not-allowed opacity-70">Terms & Conditions</span></li>
              <li><span className="cursor-not-allowed opacity-70">Safety Guidelines</span></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-[rgb(var(--border))] pt-6 text-xs text-[rgb(var(--muted))] md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Alif Marriage Media. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <span>Made for client-ready delivery</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
