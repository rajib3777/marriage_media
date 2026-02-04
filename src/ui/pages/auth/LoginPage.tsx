import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "./AuthLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { loginSchema } from "./authSchema";
import { useAuthStore } from "../../../auth/authStore";

type Form = z.infer<typeof loginSchema>;

export function LoginPage() {
  const navigate = useNavigate();
  const login = useAuthStore((s) => s.login);
  const isLoading = useAuthStore((s) => s.isLoading);

  const { register, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "demo@alif.com", password: "Demo@1234" }
  });

  return (
    <AuthLayout title="Login" subtitle="Use demo credentials prefilled.">
      <form
        className="space-y-4"
        onSubmit={handleSubmit(async (v) => {
          await login(v.email, v.password);
          navigate("/app");
        })}
      >
        <Input label="Email" placeholder="you@email.com" {...register("email")} error={errors.email?.message} />
        <Input label="Password" type="password" placeholder="••••••••" {...register("password")} error={errors.password?.message} />

        <Button className="w-full" isLoading={isLoading} type="submit">
          Login
        </Button>

        <div className="flex items-center justify-between text-sm">
          <Link to="/forgot-password" className="text-[rgb(var(--accent))] hover:underline">
            Forgot password?
          </Link>
          <Link to="/register" className="text-[rgb(var(--accent))] hover:underline">
            Create account
          </Link>
        </div>
      </form>
    </AuthLayout>
  );
}
