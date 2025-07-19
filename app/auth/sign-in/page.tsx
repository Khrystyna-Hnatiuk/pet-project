"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { signInSchema } from "./config";
import { auth } from "@/lib/firebase/config";
import { LoaderCircleIcon } from "lucide-react";
import { RouteName } from "@/configs/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast, Toaster } from "sonner";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/password-input";
import { useTheme } from "@/components/theme/ThemeContext";

export default function SignInPage() {
  const router = useRouter();
  const { theme } = useTheme();

  const [signInUserWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const form = useForm<z.infer<typeof signInSchema>>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit({ email, password }: z.infer<typeof signInSchema>) {
    setIsSubmitting(true);
    try {
      await signInUserWithEmailAndPassword(email, password);
      toast.success("Welcome! You successfully signed in");
      form.reset();

      // router.push(RouteName.DASHBOARD);
      setIsSubmitting(false);
    } catch {
      toast.error("Failed to sign in");
    }
  }
  return (
    <section className="flex items-center justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-md w-full mx-auto "
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    className="focus:bg-white focus:text-black"
                    placeholder="Enter email"
                    type="email"
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex items-start  gap-5 md:items-start max-sm:flex-col">
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      className="w-full"
                      placeholder="Your password"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <Button disabled={isSubmitting} className={`flex ${theme==='dark' ? 'bg-[rgb(247,230,230)] text-[rgb(60,6,6)]': 'bg-[rgb(60,6,6)] text-white ' } `} type="submit">

          
            {isSubmitting && <LoaderCircleIcon className="animate-spin" />} Sign
            in
          </Button>
          <Link href={RouteName.SIGN_UP}>
            <Button type="button" variant="link" className="px-0">
              Don`t have an account? Sign up!
            </Button>
          </Link>
        </form>
      </Form>
    </section>
  );
}
