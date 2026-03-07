"use client";

import React, { useState } from "react";
import { 
  Search, 
  ArrowRight, 
  CheckCircle2, 
  Clock, 
  XCircle, 
  Calendar, 
  FileText, 
  User,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

// Mock Database for status lookup
const MOCK_APPLICATIONS: Record<string, any> = {
  "ADM-123456": {
    name: "John Doe",
    class: "Grade 5",
    status: "Approved",
    date: "March 01, 2026",
    steps: [
      { label: "Submitted", date: "Mar 01", completed: true },
      { label: "Reviewing Documents", date: "Mar 03", completed: true },
      { label: "Final Decision", date: "Mar 05", completed: true },
    ],
    note: "Congratulations! Please visit the school office for the enrollment kit."
  },
  "ADM-654321": {
    name: "Jane Smith",
    class: "Grade 2",
    status: "Pending",
    date: "March 06, 2026",
    steps: [
      { label: "Submitted", date: "Mar 06", completed: true },
      { label: "Reviewing Documents", date: "-", completed: false },
      { label: "Final Decision", date: "-", completed: false },
    ],
    note: "Your documents are currently being verified by our registrar."
  }
};

export default function AdmissionStatusPage() {
  const [searchId, setSearchId] = useState("");
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const app = MOCK_APPLICATIONS[searchId.toUpperCase()];
    if (app) {
      setResult(app);
      setError(false);
    } else {
      setResult(null);
      setError(true);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center py-20 px-4">
      
      {/* --- HEADER --- */}
      <div className="max-w-2xl w-full text-center mb-12">
        <h1 className="text-4xl font-black tracking-tight mb-4">Track Your Application</h1>
        <p className="text-muted-foreground text-lg">
          Enter your unique Application ID sent to your email to see real-time progress.
        </p>
      </div>

      {/* --- SEARCH BOX --- */}
      <div className="max-w-xl w-full mb-12">
        <form onSubmit={handleSearch} className="relative group">
          <input 
            type="text" 
            placeholder="Enter ID (e.g. ADM-123456)"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
            className="w-full h-16 pl-6 pr-32 rounded-2xl border-2 border-muted bg-card text-xl font-mono focus:border-primary focus:outline-none transition-all shadow-soft"
          />
          <button className="absolute right-2 top-2 bottom-2 px-6 bg-primary text-primary-foreground rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
            Track <ArrowRight size={18} />
          </button>
        </form>
        {error && (
          <p className="mt-3 text-red-500 text-sm font-semibold flex items-center gap-2 px-2">
            <XCircle size={14} /> Application ID not found. Please check and try again.
          </p>
        )}
      </div>

      {/* --- RESULT VIEW --- */}
      {result && (
        <div className="max-w-3xl w-full animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="glass rounded-[2.5rem] border shadow-2xl overflow-hidden bg-card">
            
            {/* Status Banner */}
            <div className={`p-8 flex items-center justify-between ${
              result.status === 'Approved' ? 'bg-green-500/10' : 
              result.status === 'Rejected' ? 'bg-red-500/10' : 'bg-orange-500/10'
            }`}>
              <div className="flex items-center gap-4">
                <StatusIcon status={result.status} />
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest opacity-60">Current Status</p>
                  <h2 className={`text-2xl font-black ${
                    result.status === 'Approved' ? 'text-green-600' : 
                    result.status === 'Rejected' ? 'text-red-600' : 'text-orange-600'
                  }`}>{result.status}</h2>
                </div>
              </div>
              <div className="text-right hidden sm:block">
                <p className="text-xs font-bold uppercase tracking-widest opacity-60">Application ID</p>
                <p className="font-mono font-bold text-lg">{searchId.toUpperCase()}</p>
              </div>
            </div>

            {/* Application Details Grid */}
            <div className="p-8 md:p-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                <DetailItem icon={<User size={18}/>} label="Student Name" value={result.name} />
                <DetailItem icon={<ShieldCheck size={18}/>} label="Applying For" value={result.class} />
                <DetailItem icon={<Calendar size={18}/>} label="Submission Date" value={result.date} />
                <DetailItem icon={<FileText size={18}/>} label="Decision Date" value={result.status === 'Pending' ? 'Awaiting Review' : 'Processed'} />
              </div>

              {/* Progress Stepper */}
              <div className="mb-10">
                <h3 className="font-bold mb-6 flex items-center gap-2">
                  Workflow Progress <ChevronRight size={16} className="text-muted-foreground"/>
                </h3>
                <div className="flex flex-col sm:flex-row justify-between gap-4 relative">
                  {/* Background Line */}
                  <div className="absolute top-5 left-5 right-5 h-0.5 bg-muted hidden sm:block -z-10" />
                  
                  {result.steps.map((step: any, i: number) => (
                    <div key={i} className="flex sm:flex-col items-center gap-4 sm:gap-2 bg-card sm:bg-transparent">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center border-4 border-card shadow-sm ${
                        step.completed ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'
                      }`}>
                        {step.completed ? <CheckCircle2 size={20} /> : <Clock size={20} />}
                      </div>
                      <div className="sm:text-center">
                        <p className="text-sm font-bold">{step.label}</p>
                        <p className="text-xs text-muted-foreground">{step.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Remarks/Note */}
              <div className="bg-muted/50 border rounded-2xl p-6">
                <p className="text-xs font-bold text-muted-foreground uppercase mb-2">School Remarks</p>
                <p className="text-foreground font-medium italic">"{result.note}"</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- FOOTER INFO --- */}
      {!result && (
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl text-center">
          <InfoCard title="Need Help?" desc="Contact our admissions office at +1-555-0123" />
          <InfoCard title="Documentation" desc="Missing files? Upload them via the portal" />
          <InfoCard title="Next Steps" desc="Learn about our interview process" />
        </div>
      )}
    </div>
  );
}

// UI Sub-components
function StatusIcon({ status }: { status: string }) {
  if (status === 'Approved') return <div className="w-12 h-12 bg-green-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-green-500/20"><CheckCircle2 size={28}/></div>;
  if (status === 'Rejected') return <div className="w-12 h-12 bg-red-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-red-500/20"><XCircle size={28}/></div>;
  return <div className="w-12 h-12 bg-orange-500 text-white rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/20"><Clock size={28}/></div>;
}

function DetailItem({ icon, label, value }: any) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-1 text-primary">{icon}</div>
      <div>
        <p className="text-xs font-bold text-muted-foreground uppercase tracking-wider">{label}</p>
        <p className="text-lg font-bold text-foreground">{value}</p>
      </div>
    </div>
  );
}

function InfoCard({ title, desc }: any) {
  return (
    <div className="p-6">
      <h4 className="font-bold text-foreground mb-2">{title}</h4>
      <p className="text-sm text-muted-foreground">{desc}</p>
    </div>
  );
}