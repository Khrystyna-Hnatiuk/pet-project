"use client";
import { auth } from "@/lib/firebase/config";
import { RouteName } from "@/configs/constants";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { LoaderCircleIcon } from "lucide-react";
export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, loading] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.push(RouteName.DASHBOARD);
    }
  }, [user, loading, router]);

  if (loading || user) {
    return <LoaderCircleIcon className="animate-spin m-auto" />;
  }
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-[100px]">{children}</div>
    </>
  );
}
