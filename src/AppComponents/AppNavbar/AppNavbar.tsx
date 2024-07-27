"use client";
import * as React from "react";
import Link from "next/link";
import { Menubar } from "@/components/ui/menubar";
import { ModeToggle } from "@/components/ui/theme-toggle-button";
import Image from "next/image";

export function AppNavigationMenu() {
  return (
    <Menubar className="flex justify-between px-[1em] py-[2em]">
      <div>
        <Link href="/">
          <Image src="/logo_transparent.png" alt="logo" width={80} height={40} />
        </Link>
      </div>
      <div className="flex justify-center items-center gap-[1em]">
        <ModeToggle />
      </div>
    </Menubar>
  );
}
