import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { AuthLayout } from "./AuthLayout";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { verifySchema } from "./authSchema";
import { toast } from "sonner";
import { Link } from "react-router-dom";

type Form = z.infer<typeof verifySchema>;

export function VerifyPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<Form>({
    resolver: zodResolver(verifySchema),
    defaultValues: { otp: "" }
  });

  return (
    <AuthLayout title="Verify" subtitle="OTP / Email verification screen (mock).">
      <form
        className="space-y-4"
        onSubmit={handleSubmit(async () => {
          await new Promise((r) => setTimeout(r, 700));
          toast.success("Verified (mock). You can login now.");
        })}
      >
        <Input label="OTP code" placeholder="Enter OTP" {...register("otp")} error={errors.otp?.message} />
        <Button className="w-full" isLoading={isSubmitting} type="submit">
          Verify
        </Button>

        <div className="text-sm">
          <Link to="/login" className="text-[rgb(var(--accent))] hover:underline">Back to login</Link>
        </div>
      </form>
    </AuthLayout>
  );
}
