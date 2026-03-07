"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  FileText,
  User,
  Phone,
  Mail,
  MapPin,
  UploadCloud,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Search,
  ClipboardList
} from "lucide-react";

export default function AdmissionsPage() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [applicationId, setApplicationId] = useState("");

  const [formData, setFormData] = useState({
    studentName: "",
    classApplying: "",
    parentName: "",
    phone: "",
    email: "",
    address: "",
    photo: null,
    birthCert: null,
    transcript: null
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const target = e.target as HTMLInputElement;
    
    if (target.files) {
      setFormData({ ...formData, [name]: target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const id = `ADM-${Math.floor(100000 + Math.random() * 900000)}`;
    setApplicationId(id);
    setIsSubmitted(true);
  };

  // Reusable Input Style
  const inputStyle = "w-full px-4 py-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all";

  return (
    <div className="min-h-screen bg-background pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-primary/5 py-16 border-b">
        <div className="container mx-auto text-center px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-4">
            <ClipboardList size={14} /> Academic Year 2026-2027
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
            Begin Your <span className="text-primary">Journey</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Complete the three-step application process to join our academic community.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-10">
        <div className="max-w-3xl mx-auto bg-card border rounded-[2rem] shadow-2xl shadow-primary/5 overflow-hidden">
          
          {/* --- STEPPER INDICATOR --- */}
          <div className="bg-muted/30 px-8 py-6 border-b flex justify-between items-center">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm transition-colors ${
                  step >= i ? "bg-primary text-primary-foreground" : "bg-border text-muted-foreground"
                }`}>
                  {step > i ? <CheckCircle2 size={16} /> : i}
                </div>
                <span className={`hidden sm:inline text-xs font-bold uppercase tracking-widest ${
                  step >= i ? "text-primary" : "text-muted-foreground"
                }`}>
                  {i === 1 ? "Student" : i === 2 ? "Parent" : "Documents"}
                </span>
                {i < 3 && <div className="hidden sm:block w-12 h-[2px] bg-border mx-2" />}
              </div>
            ))}
          </div>

          <div className="p-8 md:p-12">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* STEP 1: STUDENT INFO */}
                {step === 1 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><User size={20} /></div>
                      <h3 className="text-xl font-bold">Student Information</h3>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-4">
                      <label className="text-sm font-semibold ml-1">Full Name</label>
                      <input required name="studentName" placeholder="Enter student's full name" onChange={handleChange} className={inputStyle} />
                      
                      <label className="text-sm font-semibold ml-1 text-primary">Class Applying For</label>
                      <select required name="classApplying" onChange={handleChange} className={inputStyle}>
                        <option value="">Select Class...</option>
                        {[...Array(10)].map((_, i) => (
                          <option key={i+1} value={i+1}>Grade {i+1}</option>
                        ))}
                      </select>
                    </div>

                    <button type="button" onClick={nextStep} className="w-full py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all mt-6 shadow-lg shadow-primary/20">
                      Continue to Parent Details <ArrowRight size={18} />
                    </button>
                  </div>
                )}

                {/* STEP 2: PARENT INFO */}
                {step === 2 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><Phone size={20} /></div>
                      <h3 className="text-xl font-bold">Parent / Guardian Details</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">Parent Name</label>
                        <input required name="parentName" placeholder="Guardian Full Name" onChange={handleChange} className={inputStyle} />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-semibold ml-1">Phone Number</label>
                        <input required name="phone" placeholder="+1 (555) 000-0000" onChange={handleChange} className={inputStyle} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold ml-1">Email Address</label>
                      <input required name="email" type="email" placeholder="example@mail.com" onChange={handleChange} className={inputStyle} />
                    </div>

                    <div className="space-y-2">
                      <label className="text-sm font-semibold ml-1">Residential Address</label>
                      <textarea required name="address" placeholder="Enter full home address" onChange={handleChange} className={`${inputStyle} h-24 resize-none`} />
                    </div>

                    <div className="flex gap-4 pt-4">
                      <button type="button" onClick={prevStep} className="flex-1 py-4 border-2 border-border rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-muted transition-all">
                        <ArrowLeft size={18} /> Back
                      </button>
                      <button type="button" onClick={nextStep} className="flex-[2] py-4 bg-primary text-primary-foreground rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all shadow-lg shadow-primary/20">
                        Continue to Documents <ArrowRight size={18} />
                      </button>
                    </div>
                  </div>
                )}

                {/* STEP 3: DOCUMENTS */}
                {step === 3 && (
                  <div className="space-y-4 animate-in fade-in slide-in-from-right-4 duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="p-2 bg-primary/10 rounded-lg text-primary"><UploadCloud size={20} /></div>
                      <h3 className="text-xl font-bold">Upload Required Documents</h3>
                    </div>

                    <div className="grid gap-4">
                      <div className="p-4 border-2 border-dashed border-border rounded-xl hover:border-primary/50 transition-colors">
                        <label className="block text-sm font-bold mb-2">Student Photo (Passport Size)</label>
                        <input type="file" name="photo" onChange={handleChange} className="text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                      </div>

                      <div className="p-4 border-2 border-dashed border-border rounded-xl hover:border-primary/50 transition-colors">
                        <label className="block text-sm font-bold mb-2">Birth Certificate (PDF/JPG)</label>
                        <input type="file" name="birthCert" onChange={handleChange} className="text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-bold file:bg-primary/10 file:text-primary hover:file:bg-primary/20" />
                      </div>
                    </div>

                    <div className="flex gap-4 pt-6">
                      <button type="button" onClick={prevStep} className="flex-1 py-4 border-2 border-border rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-muted transition-all">
                        Back
                      </button>
                      <button type="submit" className="flex-[2] py-4 bg-green-600 text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-green-700 transition-all shadow-lg shadow-green-600/20">
                        Complete Submission <CheckCircle2 size={18} />
                      </button>
                    </div>
                  </div>
                )}
              </form>
            ) : (
              /* --- SUCCESS VIEW --- */
              <div className="text-center py-6 animate-in zoom-in-95 duration-500">
                <div className="w-24 h-24 mx-auto bg-green-500/10 text-green-600 rounded-full flex items-center justify-center mb-6 ring-8 ring-green-500/5">
                  <CheckCircle2 size={48} />
                </div>
                <h2 className="text-3xl font-black mb-2 tracking-tight">Application Sent!</h2>
                <p className="text-muted-foreground mb-8">
                  Your application for <span className="text-foreground font-bold">{formData.studentName}</span> has been queued for review.
                </p>

                <div className="max-w-xs mx-auto bg-muted/50 p-6 rounded-2xl border-2 border-border mb-8 relative">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground mb-2">Application Tracking ID</p>
                   <div className="text-3xl font-mono font-black text-primary tracking-tighter">
                     {applicationId}
                   </div>
                </div>

                <button
                  onClick={() => router.push("/public/admissions/status")}
                  className="w-full py-4 bg-foreground text-background rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 transition-all"
                >
                  Track Application Status <Search size={18} />
                </button>
                <p className="text-xs text-muted-foreground mt-4 italic">
                  A copy of this ID has been sent to {formData.email}
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* --- EXTERNAL TRACKING SECTION --- */}
      {!isSubmitted && (
        <section className="container mx-auto px-4 mt-12">
          <div className="max-w-lg mx-auto text-center bg-card p-8 rounded-3xl border border-border shadow-sm">
            <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2">
              <Search size={20} className="text-primary" /> Already have an ID?
            </h3>
            <button
              onClick={() => router.push("/public/admissions/status")}
              className="w-full py-3 bg-muted font-bold rounded-xl hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Go to Status Tracker
            </button>
          </div>
        </section>
      )}
    </div>
  );
}