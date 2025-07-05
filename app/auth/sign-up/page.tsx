"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { toast } from "sonner";
import * as z from "zod";
import { signUpSchema } from "./config";
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
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/lib/firebase/config";
import { LoaderCircleIcon } from "lucide-react";
import Link from "next/link";
import { DbCollectionName, RouteName } from "@/configs/constants";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useTheme } from "@/components/theme/ThemeContext";
import { setDoc, doc } from "firebase/firestore";
import { db } from "@/lib/firebase/config";

export default function SignUpPage() {
  const { theme } = useTheme();
  const router = useRouter();
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  async function onSubmit({ email, password }: z.infer<typeof signUpSchema>) {
    setIsSubmitting(true);
    const result = await createUserWithEmailAndPassword(email, password);
    if (!result) {
      toast.error("Failed to sign up. Please try again");
      setIsSubmitting(false);
      return;
    }
    const user = result.user;
    await setDoc(doc(db, DbCollectionName.USERS, user.uid), {
      email: user.email,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    toast.success("Welcome!You successfully signed up!");
    console.log("ok");
    form.reset();
    router.push(RouteName.DASHBOARD);
    setIsSubmitting(false);
  }

  return (
    <section className="flex items-centr justify-center">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-5 max-w-md w-full mx-auto"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" {...field} placeholder="Enter email" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-start gap-5 md:items-start max-sm:flex-col">
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
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <PasswordInput
                      className="w-full"
                      placeholder="Confirm your password."
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <Button
            disabled={isSubmitting}
            className={`flex ${
              theme === "dark"
                ? "bg-[rgb(247,230,230)] text-[rgb(60,6,6)]"
                : "bg-[rgb(60,6,6)] text-white "
            } `}
            type="submit"
          >
            {isSubmitting && <LoaderCircleIcon className="animate-spin" />}Sign
            up
          </Button>
          <Link href={RouteName.SIGN_IN}>
            <Button type="button" variant="link" className="px-0">
              {" "}
              Already have an account? Sign in!
            </Button>
          </Link>
        </form>
      </Form>
    </section>
  );
}
