import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "./AuthLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { resetSchema } from "./authSchema";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";

type Form = z.infer<typeof resetSchema>;

export function ResetPasswordPage() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(resetSchema),
    defaultValues: { code: "", password: "" }
  });

  return (
    <AuthLayout title="Reset password" subtitle="Enter code + new password (mock).">
      <form
        className="space-y-4"
        onSubmit={handleSubmit(async () => {
          await new Promise((r) => setTimeout(r, 700));
          toast.success("Password updated (mock). Please login.");
          navigate("/login");
        })}
      >
        <Input label="Reset code" placeholder="e.g. 1234" {...register("code")} error={errors.code?.message} />
        <Input label="New password" type="password" placeholder="Min 8 chars" {...register("password")} error={errors.password?.message} />
        <Button className="w-full" isLoading={isSubmitting} type="submit">
          Update password
        </Button>

        <div className="text-sm">
          <Link to="/login" className="text-[rgb(var(--accent))] hover:underline">Back to login</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
