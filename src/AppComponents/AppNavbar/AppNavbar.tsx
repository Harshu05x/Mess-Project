"use client";
import * as React from "react";
import Link from "next/link";
import { Menubar } from "@/components/ui/menubar";
import { ModeToggle } from "@/components/ui/theme-toggle-button";

export function AppNavigationMenu() {
  return (
    <Menubar className="flex justify-between px-[1em] py-[2em]">
      <div>
        <Link href="/">
          <h1 className="font-black">FALCON DEVELOPERS</h1>
        </Link>
      </div>
      <div className="flex justify-center items-center gap-[1em]">
        <ModeToggle />
      </div>
    </Menubar>
  );
}
