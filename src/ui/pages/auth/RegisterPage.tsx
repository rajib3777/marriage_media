import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "./AuthLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { registerSchema } from "./authSchema";
import { useAuthStore } from "../../../auth/authStore";

type Form = z.infer<typeof registerSchema>;

export function RegisterPage() {
  const navigate = useNavigate();
  const registerUser = useAuthStore((s) => s.register);
  const isLoading = useAuthStore((s) => s.isLoading);

  const { register, handleSubmit, formState: { errors } } = useForm<Form>({
    resolver: zodResolver(registerSchema),
    defaultValues: { name: "", email: "", password: "" }
  });

  return (
    <AuthLayout title="Create account" subtitle="Fast onboarding with validation.">
      <form
        className="space-y-4"
        onSubmit={handleSubmit(async (v) => {
          await registerUser({ name: v.name, email: v.email, password: v.password });
          navigate("/app");
        })}
      >
        <Input label="Full name" placeholder="Your name" {...register("name")} error={errors.name?.message} />
        <Input label="Email" placeholder="you@email.com" {...register("email")} error={errors.email?.message} />
        <Input label="Password" type="password" placeholder="Min 8 chars, 1 uppercase, 1 number" {...register("password")} error={errors.password?.message} />

        <Button className="w-full" isLoading={isLoading} type="submit">
          Sign up
        </Button>

        <div className="text-sm text-[rgb(var(--muted))]">
          Already have an account?{" "}
          <Link to="/login" className="text-[rgb(var(--accent))] hover:underline">
            Login
          </Link>
        </div>

        <div className="text-xs text-[rgb(var(--muted))]">
          By signing up, you agree to our Terms and Privacy Policy (placeholders).
        </div>
      </form>
    </AuthLayout>
  );
}
