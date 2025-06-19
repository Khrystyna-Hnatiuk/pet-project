"use client";

import { headerLinks } from "@/components/header/config";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "../theme/ThemeContext";
import ButtonTheme from "../theme/buttonTheme";
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
import { Skeleton } from "@/components/ui/skeleton";
import { RouteName } from "@/configs/constants";
// import { auth } from "@/lib/firebase/config";
// import { useCartSelector } from "@/lib/store/selectors";
import clsx from "clsx";
import { FlameIcon, MenuIcon, ShoppingCartIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
// import { useAuthState } from "react-firebase-hooks/auth";

export default function Header() {
  const pathname = usePathname();
  const { theme, toggleTheme } = useTheme();

  //   const [user, isLoading] = useAuthState(auth);

  //   const { items } = useCartSelector();

  //   const cartQuantityTotal = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 border-b">
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
              <span className="sr-only"></span>
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

      <Link href={RouteName.MAIN} className="mr-6 hidden lg:flex">
        <FlameIcon className="h-6 w-6" />
        <span className="sr-only"></span>
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

      <div className="ml-auto flex gap-2">
        {/* <Link href={RouteName.CART} className='relative'>
          <Button variant='outline' size='icon'>
            {cartQuantityTotal > 0 && (
              <Badge
                className='absolute left-0 top-0 -translate-y-1/2 -translate-x-1/2 text-[12px] leading-none px-1 font-bold
'
              >
                {cartQuantityTotal}
              </Badge>
            )}

            <ShoppingCartIcon className='h-6 w-6' />
          </Button>
        </Link> */}

        {/* {isLoading ? (
          <Skeleton className='h-9 w-[106px]' />
        ) : user ? ( */}
        <Link href={RouteName.DASHBOARD}>
          <Button variant="outline">Dashboard</Button>
        </Link>
        {/* ) : ( */}
        <>
          <Link href={RouteName.SIGN_IN}>
            <Button variant="outline">Sign in</Button>
          </Link>
          <Link href={RouteName.SIGN_UP}>
            <Button className={` ${theme==='light'? 'bg-[rgb(60,6,6)]' :'bg-[rgb(247,230,230)]'} `}>Sign Up</Button>
          </Link>
        </>
        {/* )} */}
      </div>
    </header>
  );
}
