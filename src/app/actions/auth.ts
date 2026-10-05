'use server';
import { SignupFormSchema, FormState, LoginFormSchema } from '@/app/lib/definitions'
import Mongoose from '@/lib/MongoDB';
import User from '@/models/users';
import bcrypt from 'bcryptjs';
import { createSession, deleteSession } from '../lib/session';
import { redirect } from 'next/navigation';
import {  signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';

Mongoose();

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = await SignupFormSchema.safeParseAsync({
    name: formData.get('name'),
    email: formData.get('email'),
    password: formData.get('password'),
  })

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  // Call the provider or db to create a user...

  // 2. Prepare data for insertion into database
  const { name, email, password } = validatedFields.data
  // e.g. Hash the user's password before storing it
  const hashedPassword = await bcrypt.hash(password, 10)

  // 3. Insert the user into the database or call an Auth Library's API
  const user = await User.create({ name, email, password: hashedPassword });

  if (!user) {
    return {
      message: 'An error occurred while creating your account.',
    }
  }

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/",
  });
  
}

export async function login(state: FormState, formData: FormData) {
  // Validate form fields
  const rawEmail = formData.get('email');
  const rawPassword = formData.get('password');

  const emailStr = typeof rawEmail === 'string' ? rawEmail : '';
  const passwordStr = typeof rawPassword === 'string' ? rawPassword : '';

  // 1. Validate form fields
  const validatedFields = LoginFormSchema.safeParse({
    email: emailStr,
    password: passwordStr,
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      fields: { email: emailStr },
    };
  }

  // Call the provider or db to create a user...

  // 2. Prepare data for insertion into database
  const { email, password } = validatedFields.data

  // 3. checking the user exists in the database
  const user = await User.findOne({ email });

  if (!user) {
   return {
      errors: { email: ['Invalid email address.'] },
      fields: { email }
    };
  }

  // 4. checking the password
  const isPasswordValid = await bcrypt.compare(password, user.password)
  if (!isPasswordValid) {
    return {
      errors: { password: ['Invalid password.'] },
      fields: { email }
    };
  }
  revalidatePath("/", "layout");

  await signIn("credentials", {
    email,
    password,
    redirectTo: "/?",
  });
}

export async function logout() {
  await signOut({ redirectTo: "/?" });
  
}

export async function CheckEmailRegistered(email: string) {
  const user = await User.exists({ email });
  return !!user
}

export async function GoogleLogin() {
  await signIn('google', { redirectTo: "/" })
}