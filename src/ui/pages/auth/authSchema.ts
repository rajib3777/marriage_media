import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Min 6 chars")
});

export const registerSchema = z.object({
  name: z.string().min(2, "Enter name"),
  email: z.string().email("Enter a valid email"),
  password: z
    .string()
    .min(8, "Min 8 chars")
    .regex(/[A-Z]/, "1 uppercase required")
    .regex(/[0-9]/, "1 number required")
});

export const forgotSchema = z.object({
  email: z.string().email("Enter a valid email")
});

export const resetSchema = z.object({
  code: z.string().min(4, "Enter code"),
  password: z.string().min(8, "Min 8 chars")
});

export const verifySchema = z.object({
  otp: z.string().min(4, "Enter OTP")
});
