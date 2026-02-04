import { Link, NavLink, useNavigate } from "react-router-dom";
import { Container } from "../components/Container";
import { Button } from "../components/Button";
import { useThemeStore } from "../../theme/themeStore";
import { useAuthStore } from "../../auth/authStore";
import { cn } from "../lib/cn";

const nav = [
  { to: "/", label: "Home" },
  { to: "/search", label: "Search" },
  { to: "/profiles", label: "Profiles" },
  { to: "/packages", label: "Packages" },
  { to: "/faq", label: "FAQ" }
];

export function Navbar() {
  const toggleMode = useThemeStore((s) => s.toggleMode);
  const mode = useThemeStore((s) => s.mode);
  const token = useAuthStore((s) => s.token);
  const logout = useAuthStore((s) => s.logout);
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-40 border-b border-[rgb(var(--border))] bg-[rgb(var(--bg))]/80 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/logo.jpg" alt="Alif Marriage Media" className="h-9 w-9 rounded-xl object-cover" />
          <div className="leading-tight">
            <div className="text-sm font-semibold">Alif Marriage Media</div>
            <div className="text-[11px] text-[rgb(var(--muted))]">Find your perfect match</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  "rounded-xl px-3 py-2 text-sm text-[rgb(var(--muted))] hover:bg-black/5 hover:text-[rgb(var(--fg))]",
                  isActive && "bg-black/5 text-[rgb(var(--fg))]"
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" onClick={toggleMode} aria-label="toggle theme">
            {mode === "light" ? "Dark" : "Light"}
          </Button>

          {token ? (
            <>
              <Button variant="secondary" onClick={() => navigate("/app")}>
                Dashboard
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  logout();
                  navigate("/");
                }}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button variant="secondary" onClick={() => navigate("/login")}>
                Login
              </Button>
              <Button onClick={() => navigate("/register")}>Sign up</Button>
            </>
          )}
        </div>
      </Container>
    </header>
  );
}
