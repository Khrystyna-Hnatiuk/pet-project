"use client";

import { headerLinks } from "@/components/header/config";
import { Button } from "@/components/ui/button";
import { useTheme } from "../theme/ThemeContext";
import ButtonTheme from "../theme/buttonTheme";
import { auth } from "@/lib/firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import {
  NavigationMenu,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RouteName } from "@/configs/constants";
import clsx from "clsx";
import { FlameIcon, MenuIcon, LoaderCircleIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const { theme } = useTheme();
  const [user, isLoading] = useAuthState(auth);

  const handleSignOut = async () => {
    try {
      await auth.signOut();
    } catch (err) {
      console.error("Error signing out:", err);
    }
  };

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b">
      {/* Mobile menu */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="lg:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>

        <ButtonTheme />

        <SheetContent side="left" className="p-6">
          <SheetTitle>
            <Link href={RouteName.MAIN}>
              <FlameIcon className="h-6 w-6" />
            </Link>
          </SheetTitle>

          <div className="grid">
            {headerLinks.map((link) => (
              <SheetClose asChild key={link.label}>
                <Link
                  href={link.href}
                  className={clsx(
                    "flex w-full items-center py-2 text-lg font-semibold",
                    link.href === pathname && "underline"
                  )}
                >
                  {link.label}
                </Link>
              </SheetClose>
            ))}
          </div>
        </SheetContent>
      </Sheet>

      {/* Desktop Navigation */}
      <Link href={RouteName.MAIN} className="mr-6 hidden lg:flex">
        <FlameIcon className="h-6 w-6" />
      </Link>

      <NavigationMenu className="hidden lg:flex">
        <NavigationMenuList>
          {headerLinks.map((link) => (
            <Link href={link.href} key={link.label}>
              <Button
                className={clsx(
                  link.href === pathname && "bg-accent dark:bg-accent/50"
                )}
                variant="ghost"
              >
                {link.label}
              </Button>
            </Link>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Auth Section */}
      <div className="ml-auto flex gap-2 items-center">
        {isLoading ? (
          <LoaderCircleIcon className="animate-spin" />
        ) : user ? (
          <>
            <span className="text-sm">
              👋 {user.email?.split("@")[0]}
            </span>
            <Link href={RouteName.DASHBOARD}>
              <Button variant="outline">Dashboard</Button>
            </Link>
            <Button variant="outline" onClick={handleSignOut}>
              Sign Out
            </Button>
          </>
        ) : (
          <>
            <Link href={RouteName.SIGN_IN}>
              <Button variant="outline">Sign in</Button>
            </Link>
            <Link href={RouteName.SIGN_UP}>
              <Button
                className={` ${
                  theme === "light"
                    ? "bg-[rgb(60,6,6)] text-white"
                    : "bg-[rgb(247,230,230)] text-[rgb(60,6,6)]"
                } `}
              >
                Sign Up
              </Button>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
