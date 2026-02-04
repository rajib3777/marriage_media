import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "./AuthLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { forgotSchema } from "./authSchema";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

type Form = z.infer<typeof forgotSchema>;

export function ForgotPasswordPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(forgotSchema),
    defaultValues: { email: "" }
  });

  return (
    <AuthLayout title="Forgot password" subtitle="We will send a reset code (mock).">
      <form
        className="space-y-4"
        onSubmit={handleSubmit(async (v) => {
          await new Promise((r) => setTimeout(r, 700));
          toast.success("Reset code sent (mock). Use any code on next page.");
          navigate("/reset-password");
        })}
      >
        <Input label="Email" placeholder="you@email.com" {...register("email")} error={errors.email?.message} />
        <Button className="w-full" isLoading={isSubmitting} type="submit">
          Send reset code
        </Button>

        <div className="text-sm">
          <Link to="/login" className="text-[rgb(var(--accent))] hover:underline">Back to login</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
