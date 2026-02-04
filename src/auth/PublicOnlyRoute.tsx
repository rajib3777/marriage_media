import { Navigate } from "react-router-dom";
import { useAuthStore } from "./authStore";

export function PublicOnlyRoute({ children }: { children: React.ReactNode }) {
  const token = useAuthStore((s) => s.token);
  if (!token) return <>{children}</>;
  return <Navigate to="/app" replace />;
}
