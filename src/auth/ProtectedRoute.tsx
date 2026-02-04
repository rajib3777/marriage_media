import { Navigate } from "react-router-dom";
import { useAuthStore } from "./authStore";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token);
  const hydrated = useAuthStore((s) => s.user !== null || s.token !== null);

  // hydrate lazily
  if (!hydrated) useAuthStore.getState().hydrate();

  if (!token) return <Navigate to="/login" replace />;
  return <>{children}</>;
}
