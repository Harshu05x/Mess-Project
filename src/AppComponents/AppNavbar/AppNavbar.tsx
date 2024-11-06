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
    <Menubar className="fixed w-full h-16 flex items-center bg-[#fff7f17e] backdrop-blur-xl text-orange-500 md:px-6 justify-between z-50 border-b">
      <Link className="flex items-center justify-center" href='/'>
        <ShoppingBag className="h-6 w-6" />
        <span className="ml-2 text-2xl font-bold">MEAL'SPOTTER</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/blog">
          Blogs
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/find-mess">
          Find Mess
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/subscriptions">
          Subscriptions
        </Link>
        <div className="flex items-center">
          <Link href="/login">
            <Button className="text-sm font-medium bg-orange-500 text-white hover:text-orange-500 hover:border-orange-500 hover:border hover:bg-white">
              Login
            </Button>
          </Link>
          <Link href="/register">
            <Button variant="outline" className="text-orange-500 border-orange-500 hover:bg-orange-100 ml-2">
              Sign Up
            </Button>

          </Link>
        </div>
      </nav>

    </Menubar>
  );
}
