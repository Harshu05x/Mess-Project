"use client";
import * as React from "react";
import Link from "next/link";
import { Menubar } from "@/components/ui/menubar";
import { ModeToggle } from "@/components/ui/theme-toggle-button";
import Image from "next/image";
import { ShoppingBag, User, Menu, Star } from "lucide-react"
import { Button } from "@/components/ui/button"

export function AppNavigationMenu() {
  return (
    <Menubar className="px-4 lg:px-6 h-14 flex items-center bg-orange-500 text-white md:px-6 w-full justify-between max-w-[85%] mx-auto">
      {/* <div>
        <Link href="/">
          <Image src="/logo_transparent.png" alt="logo" width={80} height={40} />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-[1em]">
        <ModeToggle />
      </div> */}

        <Link className="flex items-center justify-center" href="#">
          <ShoppingBag className="h-6 w-6" />
          <span className="ml-2 text-2xl font-bold">MEAL'SPOTTER</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Plans
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/find-mess">
            Find Mess
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Subscriptions
          </Link>
          <Button className="text-sm font-medium bg-white text-orange-500 hover:bg-orange-100" variant="ghost">
            Login
          </Button>
        </nav>

    </Menubar>
  );
}
