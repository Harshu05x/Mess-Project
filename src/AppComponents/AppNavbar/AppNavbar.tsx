"use client";
import * as React from "react";
import Link from "next/link";
import { Menubar } from "@/components/ui/menubar";
import { ShoppingBag } from "lucide-react";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AppNavigationMenu() {
  const pathname = usePathname();
  const { isSignedIn, user } = useUser();
  // console.log(user, isSignedIn);
  // console.log(pathname);

  return (
    <>
      {pathname !== "/login" && pathname !== "/register" && (
        <Menubar className="fixed w-full h-16 flex items-center bg-[#fff7f17e] backdrop-blur-xl text-orange-500 md:px-6 justify-between z-50 border-b">
          <Link className="flex items-center justify-center" href="/">
            <ShoppingBag className="h-6 w-6" />
            <span className="ml-2 text-2xl font-bold">MEAL&apos;SPOTTER</span>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/blog"
            >
              Blogs
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/find-mess"
            >
              Find Mess
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/subscriptions"
            >
              Subscriptions
            </Link>
            <div className="flex items-center">
              {isSignedIn ? (
                <div className="flex items-center gap-4">
                  <Link
                    className="text-sm font-medium hover:underline underline-offset-4"
                    href="/profile"
                  >
                    <Avatar className="">
                      <AvatarImage
                        src={user?.imageUrl}
                        alt={user?.primaryEmailAddress?.emailAddress}
                      />
                      <AvatarFallback>{user?.primaryEmailAddress?.emailAddress[0].toUpperCase()}</AvatarFallback>
                    </Avatar>
                  </Link>
                </div>
              ) : (
                <SignInButton>
                  <Button className="text-sm font-medium bg-orange-500 text-white hover:text-orange-500 hover:border-orange-500 hover:border hover:bg-white">
                    Login
                  </Button>
                </SignInButton>
              )}
            </div>
          </nav>
        </Menubar>
      )}
    </>
  );
}
