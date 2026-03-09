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

// Login Dropdown Component (Kept exactly as you designed it)
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

// High-end Nav Data Structure
const navLinks = [
  { 
    name: "About", 
    href: "/public/about",
    subItems: [
      { name: "Our History", href: "/public/about/history" },
      { name: "Leadership", href: "/public/about/leadership" },
      { name: "Accreditation", href: "/public/about/accreditation" },
    ]
  },
  { 
    name: "Admissions", 
    href: "/public/admissions",
    subItems: [
      { name: "How to Apply", href: "/public/admissions/apply" },
      { name: "Tuition & Fees", href: "/public/admissions/tuition" },
      { name: "Campus Tours", href: "/public/admissions/tours" },
    ]
  },
  { 
    name: "Academics", 
    href: "/public/academics",
    subItems: [
      { name: "Curriculum", href: "/public/academics/curriculum" },
      { name: "Departments", href: "/public/academics/departments" },
      { name: "Library", href: "/public/academics/library" },
    ]
  },
  { name: "Notice", href: "/public/notice", hasUpdate: true },
  { name: "Facilities", href: "/public/facilities" },
  { name: "Contact", href: "/public/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 transition-all duration-300">
      <div className="w-full flex h-16 items-center justify-between px-6 lg:px-10 max-w-[1600px] mx-auto">
        
        {/* Brand/Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-xl group z-50">
          <div className="p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
            <School className="text-primary" size={26} />
          </div>
          <span className="hidden sm:inline-block tracking-tight font-heading bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
            Horizon Academy
          </span>
        </Link>

        {/* Desktop Links with Dropdowns */}
        <div className="hidden md:flex items-center gap-1 p-1 rounded-2xl border border-border/50 bg-muted/10 shadow-sm">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                href={link.href}
                className="relative flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-300 rounded-xl hover:text-primary hover:bg-background group-hover:text-primary"
              >
                <span className="relative z-10">{link.name}</span>
                
                {/* Dropdown Indicator */}
                {link.subItems && (
                  <ChevronDown size={14} className="relative z-10 group-hover:rotate-180 transition-transform duration-300" />
                )}

                {/* Notice Dot */}
                {link.hasUpdate && (
                  <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive animate-pulse z-20" />
                )}
              </Link>

              {/* High-End Hover Dropdown */}
              {link.subItems && (
                <div className="absolute top-full left-0 mt-2 w-56 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                  <div className="p-2 bg-popover border border-border rounded-xl shadow-xl flex flex-col gap-1">
                    {link.subItems.map((sub) => (
                      <Link 
                        key={sub.name} 
                        href={sub.href}
                        className="px-3 py-2 text-sm text-popover-foreground rounded-lg hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {sub.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Actions Area */}
        <div className="flex items-center gap-3 z-50">
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
              bg-muted/30 focus:bg-background focus:ring-2 ring-primary/20 
              outline-none transition-all duration-300 text-sm
              ${open ? "w-64 opacity-100" : "w-9 opacity-0 cursor-pointer"}`}
            />
          </div>
          
          <ModeToggle />
          <UserLoginDropdown />
        </div>
      </div>
    </nav>
  );
}