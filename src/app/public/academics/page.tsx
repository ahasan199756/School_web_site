// src/app/public/academics/page.tsx
import React from "react";
import { 
  BookOpen, 
  Microscope, 
  Palette, 
  Binary, 
  Music, 
  Trophy,
  ArrowRight,
  GraduationCap
} from "lucide-react";

export default function AcademicsPage() {
  return (
    <div className="flex flex-col w-full pb-20">
      {/* --- HERO SECTION --- */}
      <section className="bg-muted/50 py-20 border-b">
        <div className="container mx-auto px-4 text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Academic <span className="text-primary">Excellence</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A balanced curriculum designed to challenge the mind, inspire 
            creativity, and prepare students for the world's leading universities.
          </p>
        </div>
      </section>

      {/* --- DEPARTMENTS GRID --- */}
      <section className="py-24 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-2">Our Departments</h2>
            <p className="text-muted-foreground text-sm">Specialized learning paths led by industry-certified educators.</p>
          </div>
          <button className="text-primary font-semibold flex items-center gap-2 hover:underline">
            Download Syllabus <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DeptCard 
            icon={<Microscope size={24} />} 
            title="Science & Tech" 
            desc="Advanced biology, chemistry, and physics with state-of-the-art laboratory access."
          />
          <DeptCard 
            icon={<Binary size={24} />} 
            title="Computer Science" 
            desc="Coding in Python, Java, and Web Development starting from Grade 6."
          />
          <DeptCard 
            icon={<Palette size={24} />} 
            title="Fine Arts" 
            desc="Exploring visual arts, digital design, and classical art history."
          />
          <DeptCard 
            icon={<BookOpen size={24} />} 
            title="Humanities" 
            desc="A deep dive into world history, philosophy, and global literature."
          />
          <DeptCard 
            icon={<Music size={24} />} 
            title="Performing Arts" 
            desc="Orchestra, choir, and theater productions held in our professional auditorium."
          />
          <DeptCard 
            icon={<Trophy size={24} />} 
            title="Physical Ed" 
            desc="Competitive sports programs including football, swimming, and basketball."
          />
        </div>
      </section>

      {/* --- ACADEMIC LEVELS --- */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12">
            <LevelBox 
              title="Primary School" 
              grades="Grades 1-5" 
              focus="Foundation in literacy, numeracy, and social-emotional learning."
            />
            <LevelBox 
              title="Middle School" 
              grades="Grades 6-8" 
              focus="Interdisciplinary projects, critical thinking, and early specialization."
            />
            <LevelBox 
              title="High School" 
              grades="Grades 9-12" 
              focus="AP/IB preparation, university counseling, and career orientation."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

// Sub-components
function DeptCard({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) {
  return (
    <div className="p-8 border rounded-3xl bg-card hover:bg-muted/50 transition-all border-border/50 group">
      <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">{desc}</p>
    </div>
  );
}

function LevelBox({ title, grades, focus }: { title: string, grades: string, focus: string }) {
  return (
    <div className="space-y-4 p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
      <GraduationCap className="h-8 w-8 opacity-50" />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-sm font-semibold text-primary-foreground/70">{grades}</p>
      <p className="text-sm leading-relaxed opacity-90">{focus}</p>
    </div>
  );
}