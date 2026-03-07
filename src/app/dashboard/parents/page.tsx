"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  CalendarCheck, 
  GraduationCap, 
  CreditCard, 
  Bell, 
  Download, 
  FileText, 
  AlertCircle,
  ArrowRight,
  CheckCircle2,
  Clock
} from "lucide-react";

export default function ParentDashboard() {
  return (
    <DashboardLayout pageTitle="Parent Overview" role="Parent">
      
      {/* --- QUICK STATS ROW --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard 
          icon={<CalendarCheck size={24} />} 
          title="Attendance" 
          value="94%" 
          subtitle="Updated today at 9:00 AM"
          colorClass="text-green-500"
          bgClass="bg-green-500/10"
        />
        <StatCard 
          icon={<CreditCard size={24} />} 
          title="Next Fee Due" 
          value="$450.00" 
          subtitle="Due by Oct 15, 2026"
          colorClass="text-red-500"
          bgClass="bg-red-500/10"
          alert
        />
        <StatCard 
          icon={<GraduationCap size={24} />} 
          title="Term 1 Result" 
          value="A-" 
          subtitle="Top 15% of class"
          colorClass="text-primary"
          bgClass="bg-primary/10"
        />
        <StatCard 
          icon={<Bell size={24} />} 
          title="New Notices" 
          value="2" 
          subtitle="Unread school updates"
          colorClass="text-orange-500"
          bgClass="bg-orange-500/10"
        />
      </div>

      {/* --- MAIN DASHBOARD GRID --- */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* LEFT COLUMN: Fees & Academic Results (Takes up 2/3 width on large screens) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Fees & Payments Section */}
          <div className="glass rounded-2xl p-6 border shadow-soft relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl -mr-10 -mt-10" />
            <div className="flex justify-between items-center mb-6 relative z-10">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <CreditCard className="text-primary" size={24} /> 
                Fee Management
              </h2>
              <button className="text-sm font-medium text-primary hover:underline">View Ledger</button>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 items-center bg-background/50 border rounded-xl p-5 mb-6 relative z-10">
              <div className="flex-1">
                <p className="text-sm text-muted-foreground font-medium mb-1">Current Outstanding</p>
                <h3 className="text-3xl font-black text-foreground">$450.00 <span className="text-sm font-normal text-muted-foreground">/ Tuition Term 2</span></h3>
                <p className="text-sm text-red-500 font-medium flex items-center gap-1 mt-2">
                  <AlertCircle size={14} /> Due in 12 days
                </p>
              </div>
              <button className="w-full sm:w-auto px-8 h-12 bg-primary text-primary-foreground font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2">
                Pay Now <ArrowRight size={18} />
              </button>
            </div>

            <div className="space-y-3 relative z-10">
              <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">Recent Invoices</h4>
              {[
                { title: "Term 1 Tuition Fee", date: "Aug 01, 2026", amount: "$450.00", status: "Paid" },
                { title: "Annual Library Fee", date: "Jul 15, 2026", amount: "$50.00", status: "Paid" },
              ].map((inv, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg hover:bg-accent/50 transition-colors border border-transparent hover:border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500">
                      <CheckCircle2 size={18} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">{inv.title}</p>
                      <p className="text-xs text-muted-foreground">{inv.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-sm">{inv.amount}</span>
                    <button className="p-2 text-muted-foreground hover:text-primary transition-colors bg-background rounded-md border shadow-sm" title="Download Receipt">
                      <Download size={16} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Results & Report Cards */}
          <div className="glass rounded-2xl p-6 border shadow-soft">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <FileText className="text-primary" size={24} /> 
                Recent Results
              </h2>
            </div>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <h3 className="text-lg font-bold text-foreground">Mid-Term Examination 2026</h3>
                <p className="text-sm text-muted-foreground mt-1">Published on: Sep 20, 2026</p>
              </div>
              <button className="px-6 h-10 bg-background border shadow-sm text-foreground font-semibold rounded-lg hover:border-primary/50 hover:text-primary transition-all flex items-center gap-2">
                <Download size={18} /> Report Card
              </button>
            </div>
          </div>

        </div>

        {/* RIGHT COLUMN: Notices, Attendance Details, Document Center */}
        <div className="space-y-8">
          
          {/* Document Center */}
          <div className="glass rounded-2xl p-6 border shadow-soft">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Download className="text-primary" size={20} /> 
              Document Center
            </h2>
            <div className="space-y-2">
              {[
                { name: "Final Exam Admit Card", type: "PDF", size: "1.2 MB" },
                { name: "Annual Syllabus 2026-27", type: "PDF", size: "3.5 MB" },
                { name: "Transport Route Map", type: "Image", size: "2.1 MB" },
              ].map((doc, i) => (
                <button key={i} className="w-full flex items-center justify-between p-3 rounded-xl border border-border/50 bg-background/50 hover:bg-primary/5 hover:border-primary/30 transition-all group">
                  <div className="flex items-center gap-3 text-left">
                    <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center text-muted-foreground group-hover:text-primary transition-colors">
                      <FileText size={16} />
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-foreground">{doc.name}</p>
                      <p className="text-xs text-muted-foreground">{doc.type} • {doc.size}</p>
                    </div>
                  </div>
                  <Download size={16} className="text-muted-foreground group-hover:text-primary" />
                </button>
              ))}
            </div>
          </div>

          {/* Notice Board */}
          <div className="glass rounded-2xl p-6 border shadow-soft">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <Bell className="text-primary" size={20} /> 
              Notice Board
            </h2>
            <div className="space-y-4">
              <div className="pl-4 border-l-2 border-orange-500 relative">
                <div className="absolute w-3 h-3 bg-orange-500 rounded-full -left-[7px] top-1 border-2 border-background" />
                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><Clock size={12}/> Today, 10:00 AM</p>
                <p className="text-sm font-semibold text-foreground">Parent-Teacher Meeting Scheduled</p>
                <p className="text-xs text-muted-foreground mt-1 line-clamp-2">Please book your slot for the upcoming PTM on Saturday.</p>
              </div>
              <div className="pl-4 border-l-2 border-primary relative">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-1 border-2 border-background" />
                <p className="text-xs text-muted-foreground mb-1 flex items-center gap-1"><Clock size={12}/> Yesterday</p>
                <p className="text-sm font-semibold text-foreground">Winter Break Announcement</p>
              </div>
              <button className="w-full text-center text-sm font-medium text-primary hover:underline mt-2">
                View all notices
              </button>
            </div>
          </div>

        </div>
      </div>

    </DashboardLayout>
  );
}

// Sub-component for Quick Stats
function StatCard({ icon, title, value, subtitle, colorClass, bgClass, alert = false }: any) {
  return (
    <div className="glass p-5 rounded-2xl border shadow-soft hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden">
      {alert && <div className="absolute top-0 right-0 w-12 h-12 bg-red-500/10 rounded-bl-full" />}
      <div className="flex items-center gap-4 mb-3">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgClass} ${colorClass}`}>
          {icon}
        </div>
        <p className="font-bold text-muted-foreground text-sm">{title}</p>
      </div>
      <div>
        <h3 className="text-3xl font-black text-foreground">{value}</h3>
        <p className="text-xs font-medium text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
}