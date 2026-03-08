"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, GraduationCap, Users, School, ChevronDown, UserPlus } from "lucide-react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { ModeToggle } from "@/components/ModeToggle";

export const UserLoginDropdown = () => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:opacity-90 transition-all">
      Login / Portal <ChevronDown size={16} />
    </DropdownMenuTrigger>
    <DropdownMenuContent align="end" className="w-56 mt-2">
      <DropdownMenuItem asChild>
        <Link href="/auth/login/student" className="cursor-pointer flex items-center">
  <GraduationCap className="mr-2 h-4 w-4" /> Student Login
</Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/auth/login/parent" className="cursor-pointer flex items-center">
          <Users className="mr-2 h-4 w-4"/> Parents Portal
        </Link>
      </DropdownMenuItem>
      <DropdownMenuItem asChild>
        <Link href="/auth/login/admin" className="cursor-pointer flex items-center">
          <School className="mr-2 h-4 w-4"/> School Administration
        </Link>
      </DropdownMenuItem>
      <div className="h-px bg-muted my-1" />
      <DropdownMenuItem asChild className="font-bold text-primary">
        <Link href="/register" className="cursor-pointer flex items-center">
          <UserPlus className="mr-2 h-4 w-4"/> Create New Account
        </Link>
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function Navbar() {

  const [open, setOpen] = useState(false); // ✅ Correct place

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 transition-all duration-300">
      <div className="w-full flex h-16 items-center justify-between px-6 lg:px-10">
        
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group">
          <div className="p-1.5 rounded-lg bg-primary/5 group-hover:bg-primary/10 transition-colors">
            <School className="text-primary" size={26} />
          </div>
          <span className="hidden sm:inline-block tracking-tight font-heading bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
            Horizon Academy
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl glass-morphism shadow-inner">
          {[
            { name: "About", href: "/public/about" },
            { name: "Admissions", href: "/public/admissions" },
            { name: "Academics", href: "/public/academics" },
            { name: "Notice", href: "/public/notice", hasUpdate: true },
            { name: "Management", href: "/public/management" },
            { name: "Facilities", href: "/public/facilities" },
            { name: "Contact", href: "/public/contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 rounded-xl hover:text-primary hover:bg-background/80 group overflow-hidden"
            >
              <span className="relative z-10">{link.name}</span>

              {link.hasUpdate && <span className="notice-dot z-20" />}

              <span className="absolute inset-0 bg-primary/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />

              <span className="absolute inset-x-4 bottom-1.5 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out origin-center" />
            </Link>
          ))}
        </div>

        {/* Actions Area */}
        <div className="flex items-center gap-3">

          {/* Search Bar */}
<div className="relative hidden lg:flex items-center">
  <Search
    onClick={() => setOpen(true)}
    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground cursor-pointer z-10"
  />

  <input
    type="text"
    placeholder="Quick search..."
    onBlur={() => setOpen(false)}
    className={`h-9 pl-9 pr-4 rounded-full border border-input 
    bg-muted/20 focus:bg-background focus:ring-2 ring-primary/20 
    outline-none transition-all duration-300 text-sm
    ${open ? "w-64" : "w-9"}`}
  />
</div>
          <ModeToggle />
          <UserLoginDropdown />

        </div>
      </div>
    </nav>
  );
}