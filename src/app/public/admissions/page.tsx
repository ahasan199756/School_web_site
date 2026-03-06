import React from "react";
import { 
  ClipboardCheck, 
  FileText, 
  Calendar, 
  CheckCircle2, 
  HelpCircle,
  ArrowRight
} from "lucide-react";

export default function AdmissionsPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-primary/5 py-20 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
            Join Our <span className="text-primary">Community</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Admission for the 2026-2027 academic year is now open. Start your 
            journey toward excellence today.
          </p>
        </div>
      </section>

      {/* --- ADMISSION PROCESS STEPS --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">How to Apply</h2>
          <p className="text-muted-foreground">Four simple steps to join Horizon Academy.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          <StepCard 
            icon={<FileText size={24} />} 
            step="01" 
            title="Online Inquiry" 
            desc="Fill out the initial inquiry form below to express interest."
          />
          <StepCard 
            icon={<ClipboardCheck size={24} />} 
            step="02" 
            title="Documentation" 
            desc="Submit previous transcripts and birth certificates."
          />
          <StepCard 
            icon={<Calendar size={24} />} 
            step="03" 
            title="Interview" 
            desc="A short meeting with our admissions counselor and faculty."
          />
          <StepCard 
            icon={<CheckCircle2 size={24} />} 
            step="04" 
            title="Enrollment" 
            desc="Receive your offer letter and complete the fee payment."
          />
        </div>
      </section>

      {/* --- APPLICATION FORM SECTION --- */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12 bg-card border rounded-3xl overflow-hidden shadow-sm">
            {/* Left side: Info */}
            <div className="p-10 bg-primary text-primary-foreground flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} /> Valid ID/Passport
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} /> Last 2 years of Transcripts
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} /> 2 Passport-sized Photos
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 size={18} /> Transfer Certificate
                  </li>
                </ul>
              </div>
              <div className="mt-10 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                <p className="text-sm font-medium">Need help? Call our office:</p>
                <p className="text-xl font-bold">+1 (555) 0123-456</p>
              </div>
            </div>

            {/* Right side: Simple Form */}
            <div className="p-10">
              <h3 className="text-2xl font-bold mb-6">Request Prospectus</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Student First Name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background" />
                  <input type="text" placeholder="Last Name" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                </div>
                <input type="email" placeholder="Parent Email Address" className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm" />
                <select className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm">
                  <option>Select Grade for Admission</option>
                  <option>Primary School</option>
                  <option>Middle School</option>
                  <option>High School</option>
                </select>
                <textarea placeholder="Message (Optional)" className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"></textarea>
                <button type="button" className="w-full h-12 bg-primary text-primary-foreground font-bold rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2">
                  Submit Application <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-component for Step Cards
function StepCard({ icon, step, title, desc }: { icon: React.ReactNode, step: string, title: string, desc: string }) {
  return (
    <div className="relative p-8 rounded-2xl border bg-card hover:border-primary/50 transition-colors group">
      <span className="absolute top-4 right-4 text-4xl font-black text-muted-foreground/10 group-hover:text-primary/10 transition-colors">
        {step}
      </span>
      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}