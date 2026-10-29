import { JWTPayload } from 'jose'
import * as z from 'zod'
import { CheckEmailRegistered } from '../actions/auth';

export const SignupFormSchema = z.object({
  name: z
    .string()
    .min(2, { error: 'Name must be at least 2 characters long.' })
    .trim(),
  email: z
    .email({ error: 'Please enter a valid email.' })
    .refine(async (email) => {
      const isRegistered = await CheckEmailRegistered(email);
      return !isRegistered;
    }, {
      message: 'This Email is Already in Use'
    })
    .trim(),
  password: z
    .string()
    .min(8, { error: 'Be at least 8 characters long' })
    .regex(/[a-zA-Z]/, { error: 'Contain at least one letter.' })
    .regex(/[0-9]/, { error: 'Contain at least one number.' })
    .regex(/[^a-zA-Z0-9]/, {
      error: 'Contain at least one special character.',
    })
    .trim(),
})

export const LoginFormSchema = z.object({
  email: z
    .email({ error: 'Please enter a valid email.' })
    .trim(),
  password: z
    .string()
    .min(8, { error: 'Must be at least 8 characters long' })
    .trim(),
  redirect: z.string().optional().default("/"),
})

export const ScheduleFormSchema = z.object({
  userEmail: z
    .email()
    .trim(),
  serviceId: z
    .string()
    .trim(),
  date: z.coerce.date({
    error: "Please select a valid date",
  }),

  // Validates time strings like "14:30" or "09:00:00"
  time: z.string().time({
    message: "Invalid time format (expected HH:MM)",
  }),
})

export type FormState =
  | {
    errors?: {
      name?: string[]
      email?: string[]
      password?: string[]
      date?: string[]
      time?: string[]
      userEmail?: string[]
      serviceId?: string[]
      _form?: string[]
    }
    message?: string;
    scheduleId?: string;
    fields?: {
      email?: string;
    };
  }
  | undefined

export interface SessionPayload extends JWTPayload {
  userId: string;
  // You can optionally add other non-sensitive fields here, for example:
  // email?: string;
  // role?: 'user' | 'admin';
}