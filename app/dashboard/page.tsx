"use client";

import { auth } from "@/lib/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import { LoaderCircleIcon } from "lucide-react";
import { RouteName } from "@/configs/constants";
import { useEffect } from "react";

export default function DashboardPage() {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && !user) {
      router.push(RouteName.SIGN_IN);
    }
  }, [loading, user, router]);

  if (loading) return <LoaderCircleIcon className="animate-spin m-auto" />;
  if (!user) return null; 

  return (
    <div className="p-6">
      Welcome, {user.email}!
    </div>
  );
}
