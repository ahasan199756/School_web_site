"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  Menu, X, Bell, Search, User, Home, BookOpen, Calendar, 
  CreditCard, Settings, LogOut, ChevronRight, Users, 
  ShieldCheck, FileSpreadsheet, GraduationCap, MessageSquare, 
  LayoutDashboard, Megaphone, Palette, BarChart3, Database,
  UserPlus, Activity,
  Wallet
} from "lucide-react";

interface DashboardLayoutProps {
  children: React.ReactNode;
  pageTitle: string;
  role: "Admin" | "Teacher" | "Parent" | "Super Admin" | "Accountant" | "Student";
}

export default function DashboardLayout({ children, pageTitle, role }: DashboardLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Strictly mapped to your 20 Modules
  const navigation = {
    "Super Admin": [
      { name: "System Config", icon: <Settings size={18} />, href: "/config", mod: "18" },
      { name: "User Control", icon: <ShieldCheck size={18} />, href: "/users", mod: "3" },
      { name: "Audit Logs", icon: <Activity size={18} />, href: "/logs", mod: "19" },
      { name: "Backup/Export", icon: <Database size={18} />, href: "/backup", mod: "20" },
    ],
    Admin: [
      { name: "Insights", icon: <LayoutDashboard size={18} />, href: "/admin", mod: "17" },
      { name: "Students (SIS)", icon: <Users size={18} />, href: "/admin/sis", mod: "4" },
      { name: "Academic Setup", icon: <BookOpen size={18} />, href: "/admin/setup", mod: "5" },
      { name: "Admissions", icon: <UserPlus size={18} />, href: "/admin/leads", mod: "16" },
      { name: "Fee Manager", icon: <Wallet size={18} />, href: "/admin/fees", mod: "7" },
      { name: "SMS/Comm", icon: <Megaphone size={18} />, href: "/admin/sms", mod: "11" },
      { name: "Branding", icon: <Palette size={18} />, href: "/admin/branding", mod: "15" },
    ],
    Teacher: [
      { name: "My Portal", icon: <Home size={18} />, href: "/teacher", mod: "13" },
      { name: "Attendance", icon: <Calendar size={18} />, href: "/teacher/attendance", mod: "6" },
      { name: "Exam Marks", icon: <FileSpreadsheet size={18} />, href: "/teacher/exams", mod: "9" },
      { name: "Report Cards", icon: <GraduationCap size={18} />, href: "/teacher/reports", mod: "10" },
    ],
    Student: [
      { name: "My Portal", icon: <Home size={18} />, href: "/teacher", mod: "13" },
      { name: "Attendance", icon: <Calendar size={18} />, href: "/teacher/attendance", mod: "6" },
      { name: "Exam Marks", icon: <FileSpreadsheet size={18} />, href: "/teacher/exams", mod: "9" },
      { name: "Report Cards", icon: <GraduationCap size={18} />, href: "/teacher/reports", mod: "10" },
    ],
  };

  const navLinks = navigation[role as keyof typeof navigation] || [];

  return (
    <div className="min-h-screen bg-[#F9FAFB] flex font-sans">
      {/* --- SIDEBAR --- */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 shadow-xl lg:shadow-none transform transition-transform duration-300 ${isSidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}>
        <div className="h-20 flex items-center px-8 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-primary rounded-xl flex items-center justify-center rotate-3 shadow-lg shadow-primary/20">
              <span className="text-white font-black text-xl italic">H</span>
            </div>
            <span className="text-xl font-black tracking-tighter text-slate-800">HORIZON<span className="text-primary">.</span></span>
          </div>
        </div>

        <nav className="flex-1 py-6 px-4 space-y-1 overflow-y-auto">
          <p className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-4">Core Operations</p>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="flex items-center justify-between px-4 py-3 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:text-primary transition-all group">
              <div className="flex items-center gap-3">
                <span className="group-hover:scale-110 transition-transform">{link.icon}</span>
                <span className="text-sm">{link.name}</span>
              </div>
              <span className="text-[9px] bg-slate-100 text-slate-400 px-1.5 py-0.5 rounded opacity-0 group-hover:opacity-100 transition-opacity">M{link.mod}</span>
            </Link>
          ))}
        </nav>

        <div className="p-4 border-t border-slate-100">
          <div className="bg-slate-50 p-4 rounded-2xl mb-4">
             <div className="flex items-center gap-3">
               <div className="w-8 h-8 rounded-full bg-slate-200 animate-pulse"></div>
               <div>
                 <p className="text-xs font-black text-slate-700">System Secure</p>
                 <p className="text-[10px] text-slate-500">JWT / SSL Active</p>
               </div>
             </div>
          </div>
          <button className="flex items-center gap-3 w-full px-4 py-3 text-red-500 hover:bg-red-50 rounded-xl transition-all font-black text-xs uppercase tracking-widest">
            <LogOut size={16} /> Sign Out
          </button>
        </div>
      </aside>

      {/* --- MAIN WRAPPER --- */}
      <div className="flex-1 flex flex-col min-w-0 h-screen overflow-hidden">
        <header className="h-20 bg-white/80 backdrop-blur-md sticky top-0 z-30 flex items-center justify-between px-8 border-b border-slate-100">
          <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 rounded-lg"><Menu size={20}/></button>
          
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{role} Portal</span>
            <ChevronRight size={14} className="text-slate-300" />
            <span className="text-sm font-black text-slate-800 tracking-tight">{pageTitle}</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex relative group">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4 group-focus-within:text-primary" />
              <input type="text" placeholder="Jump to module..." className="h-10 pl-10 pr-4 w-48 focus:w-64 rounded-xl border-none bg-slate-100 text-xs font-bold transition-all outline-none focus:ring-2 focus:ring-primary/20" />
            </div>
            <button className="p-2.5 text-slate-400 hover:bg-slate-100 rounded-xl relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
            </button>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto p-8 bg-[#F9FAFB]">
          <div className="max-w-7xl mx-auto animate-in fade-in slide-in-from-bottom-3 duration-700">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}