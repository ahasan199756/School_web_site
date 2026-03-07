"use client";

import React from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { 
  Users, UserPlus, Wallet, TrendingUp, Megaphone, 
  ArrowUpRight, Palette, MoreVertical, Download
} from "lucide-react";

export default function AdminDashboard() {
  return (
    <DashboardLayout pageTitle="Command Center" role="Admin">
      
      {/* --- TOP METRICS ROW (Module 17) --- */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard icon={<Users size={24} />} title="Total Students" value="2,845" trend="+4.2%" trendUp={true} bgClass="bg-blue-500/10" colorClass="text-blue-500" />
        <StatCard icon={<UserPlus size={24} />} title="Leads" value="342" trend="Active: FB Cam." trendUp={true} bgClass="bg-purple-500/10" colorClass="text-purple-500" />
        <StatCard icon={<Wallet size={24} />} title="Fee Collection" value="$124.5k" trend="+12.5% MTD" trendUp={true} bgClass="bg-green-500/10" colorClass="text-green-500" />
        <StatCard icon={<TrendingUp size={24} />} title="Conversion Rate" value="18.4%" trend="-2% vs 2025" trendUp={false} bgClass="bg-orange-500/10" colorClass="text-orange-500" />
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        
        {/* --- LEFT & CENTER: Lead Pipeline (Module 16) --- */}
        <div className="xl:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-8">
              <div>
                <h2 className="text-2xl font-black text-slate-800">Admission Campaign</h2>
                <p className="text-slate-500 text-sm">Lead Pipeline (Module 16)</p>
              </div>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full uppercase tracking-widest">Live</span>
            </div>

            <div className="flex justify-between gap-4 relative">
              {['New Leads', 'Contacted', 'Visited', 'Admitted'].map((step, i) => (
                <div key={step} className="flex-1 text-center group">
                  <div className="h-2 bg-slate-100 rounded-full mb-4 overflow-hidden">
                    <div className="h-full bg-blue-600 transition-all duration-1000" style={{ width: `${100 - (i * 25)}%` }}></div>
                  </div>
                  <p className="text-[10px] font-black uppercase text-slate-400 mb-1">{step}</p>
                  <p className="text-xl font-bold text-slate-700">{[342, 128, 64, 22][i]}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Admission Requests Table */}
          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-black text-slate-800">Recent Requests</h2>
              <button className="text-xs font-bold text-blue-600 hover:underline">View All CRM</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead className="text-[10px] text-slate-400 uppercase tracking-widest border-b">
                  <tr>
                    <th className="pb-4 font-black">Applicant</th>
                    <th className="pb-4 font-black">Grade</th>
                    <th className="pb-4 font-black">Status</th>
                    <th className="pb-4 font-black text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {[
                    { name: "Michael Chang", grade: "Grade 10", status: "Pending", color: "text-orange-500 bg-orange-50" },
                    { name: "Sarah Jenkins", grade: "Grade 1", status: "Approved", color: "text-green-500 bg-green-50" },
                  ].map((row, i) => (
                    <tr key={i} className="group hover:bg-slate-50 transition-colors">
                      <td className="py-4 font-bold text-slate-700">{row.name}</td>
                      <td className="py-4 text-slate-500">{row.grade}</td>
                      <td className="py-4">
                        <span className={`px-2 py-1 rounded-lg text-[10px] font-black uppercase ${row.color}`}>{row.status}</span>
                      </td>
                      <td className="py-4 text-right">
                        <button className="p-2 hover:bg-white rounded-lg transition-shadow"><ArrowUpRight size={16} /></button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* --- RIGHT COLUMN: Branding & Notices (Module 15 & 11) --- */}
        <div className="space-y-8">
          <div className="bg-slate-900 p-8 rounded-[2.5rem] text-white shadow-xl relative overflow-hidden">
             <Palette className="absolute -right-4 -bottom-4 text-white/5 w-32 h-32" />
             <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
               <Palette size={20} className="text-blue-400" /> Branding Kit
             </h3>
             <div className="space-y-4 relative z-10">
               <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                 <p className="text-[10px] text-slate-400 mb-2 font-black uppercase tracking-widest">Active Identity</p>
                 <div className="flex items-center gap-3">
                   <div className="w-10 h-10 bg-blue-600 rounded-lg shadow-lg"></div>
                   <div>
                     <p className="font-bold text-sm">Ocean School Blue</p>
                     <p className="text-[10px] font-mono opacity-50">#2563EB</p>
                   </div>
                 </div>
               </div>
               <button className="w-full py-3 bg-blue-600 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-500 transition-colors flex items-center justify-center gap-2">
                 <Download size={14} /> Marketing Assets
               </button>
             </div>
          </div>

          <div className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-black flex items-center gap-2">
                <Megaphone className="text-blue-600" size={20} /> Notices
              </h2>
              <button className="p-1 text-slate-400"><MoreVertical size={16}/></button>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-2xl cursor-pointer hover:ring-2 ring-blue-600/20 transition-all">
                <span className="text-[9px] font-black bg-blue-100 text-blue-600 px-2 py-0.5 rounded uppercase">Pinned</span>
                <h4 className="font-bold text-sm mt-2 text-slate-800">Term 1 Exam Schedule</h4>
              </div>
              <button className="w-full h-12 border-2 border-dashed border-slate-200 text-slate-400 font-bold rounded-2xl hover:border-blue-600 hover:text-blue-600 transition-all text-xs">
                + Create New Notice
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}

function StatCard({ icon, title, value, trend, trendUp, bgClass, colorClass }: any) {
  return (
    <div className="bg-white p-6 rounded-[2rem] border border-slate-200 shadow-sm hover:-translate-y-1 transition-all duration-300">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${bgClass} ${colorClass}`}>
          {icon}
        </div>
        <span className={`text-[10px] font-black px-2 py-1 rounded-lg ${trendUp ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}`}>
          {trend}
        </span>
      </div>
      <div>
        <h3 className="text-3xl font-black text-slate-800 tracking-tighter">{value}</h3>
        <p className="text-xs font-bold text-slate-400 mt-1 uppercase tracking-widest">{title}</p>
      </div>
    </div>
  );
}