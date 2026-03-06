import Link from "next/link";
import Image from "next/image";
import { ArrowRight, BookOpen, Globe, Users, GraduationCap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* --- HERO SECTION --- */}
<section className="relative w-full py-20 lg:py-32 overflow-hidden bg-background">
  {/* --- 1. THE ZOOMING IMAGE LAYER (Bottom) --- */}
  <div className="absolute inset-0 z-0 overflow-hidden">
    <Image
      src="/home.webp"
      alt="Background Campus"
      fill
      className="object-cover scale-110 animate-slow-zoom"
      priority
    />
  </div>

  {/* --- 2. THE GLASS OVERLAY LAYER (Middle) --- */}
  {/* This acts as the frosted pane between the image and the text */}
  <div className="absolute inset-0 z-1 glass-white opacity-90" />

  {/* --- 3. AESTHETIC GRADIENT & BLOBS (For Depth) --- */}
  <div className="absolute inset-0 z-2">
    <div className="absolute top-0 -left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-30" />
    <div className="absolute bottom-0 -right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl opacity-30" />
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background" />
  </div>

  {/* --- 4. THE CONTENT LAYER (Top) --- */}
  <div className="container px-4 md:px-6 mx-auto relative z-10">
    <div className="grid gap-16 lg:grid-cols-2 items-center">
      
      {/* Left Column: Content */}
      <div className="space-y-8 text-center lg:text-left">
        <div className="inline-flex items-center rounded-full border border-primary/20 px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-primary mr-2 animate-ping" />
          Admissions for 2026 are now open
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Empowering the <br />
          <span className="bg-gradient-to-r from-primary to-blue-500 bg-clip-text text-transparent">
            Leaders of Tomorrow
          </span>
        </h1>
        
        <p className="max-w-[550px] mx-auto lg:mx-0 text-foreground/80 text-lg md:text-xl font-medium leading-relaxed">
          A world-class education fostering innovation and a global perspective. Join our community of excellence.
        </p>

        <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
          <Link 
            href="/admissions" 
            className="h-14 px-10 rounded-full bg-primary text-primary-foreground font-bold hover:shadow-[0_0_25px_rgba(var(--primary),0.4)] transition-all flex items-center justify-center group"
          >
            Apply Now 
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link 
            href="/about" 
            className="h-14 px-10 rounded-full border-2 border-primary/20 bg-background/30 backdrop-blur-md font-bold hover:bg-background/80 transition-all flex items-center justify-center"
          >
            Explore Campus
          </Link>
        </div>
      </div>

      {/* Right Column: Layered Gallery */}
      <div className="relative mx-auto lg:ml-auto w-full max-w-[500px] h-[500px] sm:h-[600px] group">
        {/* Architecture Image */}
        <div className="absolute top-10 right-0 w-[280px] h-[350px] sm:w-[350px] sm:h-[450px] rounded-[2.5rem] overflow-hidden shadow-2xl -rotate-6 group-hover:-rotate-2 transition-all duration-700 border-4 border-background/50 z-0">
          <Image src="https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=800" alt="Campus" fill className="object-cover" />
        </div>
        
        {/* Library Image */}
        <div className="absolute top-0 left-0 w-[250px] h-[320px] sm:w-[300px] sm:h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl rotate-12 group-hover:rotate-6 transition-all duration-1000 border-4 border-background/50 z-10">
          <Image src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800" alt="Library" fill className="object-cover" />
        </div>

        {/* Main Student Image */}
        <div className="absolute top-20 left-10 sm:left-20 w-[280px] h-[380px] sm:w-[350px] sm:h-[480px] rounded-[2.5rem] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.3)] z-20 group-hover:scale-105 transition-all duration-700 border-4 border-background">
          <Image src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800" alt="Students" fill className="object-cover" />
        </div>
        
        {/* Stat Card - Using the glass-white utility here too! */}
        <div className="absolute -bottom-6 -right-6 glass-white p-6 rounded-3xl shadow-2xl z-30 animate-bounce-slow hidden md:block">
          <div className="flex items-center gap-4">
            <div className="bg-primary p-3 rounded-2xl text-primary-foreground shadow-lg">
              <GraduationCap size={28} />
            </div>
            <div>
              <p className="text-3xl font-black tracking-tight text-foreground">2,500+</p>
              <p className="text-[10px] text-muted-foreground uppercase font-bold tracking-widest">Global Graduates</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* --- FEATURES SECTION --- */}
      <section className="py-24 relative overflow-hidden bg-background">
        <div className="container px-4 mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-4">Why Horizon Academy?</h2>
            <div className="h-1.5 w-20 bg-primary/20 mx-auto rounded-full mb-6" />
            <p className="text-muted-foreground text-lg">Experience a curriculum designed for the future.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard 
              icon={<BookOpen size={26} />} 
              title="Modern Curriculum" 
              description="Our syllabus meets the demands of a changing digital landscape."
            />
            <FeatureCard 
              icon={<Globe size={26} />} 
              title="Global Community" 
              description="Students from over 40 countries fostering inclusive culture."
            />
            <FeatureCard 
              icon={<Users size={26} />} 
              title="Expert Mentors" 
              description="1:10 ratio ensuring personalized attention for every learner."
            />
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="group p-10 space-y-6 rounded-[2.5rem] border bg-card/50 hover:bg-card hover:border-primary/30 hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
      <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
        <p className="text-muted-foreground leading-relaxed text-sm">
          {description}
        </p>
      </div>
    </div>
  );
}