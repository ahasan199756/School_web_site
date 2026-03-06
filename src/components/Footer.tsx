// src/components/Footer.tsx
import Link from "next/link";
import { 
  School, 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube, 
  ArrowRight,
  ShieldCheck,
  Globe
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-zinc-950 border-t border-slate-200 dark:border-zinc-800 transition-colors">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Column 1: Brand & Mission */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="bg-primary p-2 rounded-lg text-primary-foreground group-hover:rotate-12 transition-transform">
                <School size={28} />
              </div>
              <span className="text-2xl font-bold tracking-tight">Horizon Academy</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed text-sm">
              Excellence in education since 1998. We nurture curiosity, 
              creativity, and character in every student to prepare them 
              for a rapidly changing world.
            </p>
            <div className="flex items-center gap-4 text-primary/70">
              <Facebook className="hover:text-primary hover:scale-110 cursor-pointer transition-all" size={20} />
              <Instagram className="hover:text-primary hover:scale-110 cursor-pointer transition-all" size={20} />
              <Twitter className="hover:text-primary hover:scale-110 cursor-pointer transition-all" size={20} />
              <Youtube className="hover:text-primary hover:scale-110 cursor-pointer transition-all" size={20} />
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', path: '/public/about' },
                { name: 'Admissions', path: '/public/admissions' },
                { name: 'Academics', path: '/public/academics' },
                { name: 'School Calendar', path: '#' },
                { name: 'Career Openings', path: '#' }
              ].map((link) => (
                <li key={link.name}>
                  <Link href={link.path} className="text-muted-foreground hover:text-primary hover:pl-2 transition-all flex items-center group text-sm">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 mr-2 transition-all -ml-4 group-hover:ml-0" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources & Portals */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Resources</h4>
            <ul className="space-y-3">
              {[
                'Parent Portal', 
                'Student Portal', 
                'Staff Directory', 
                'Digital Library', 
                'Alumni Network'
              ].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-muted-foreground hover:text-primary text-sm transition-colors flex items-center gap-2">
                    <Globe size={14} className="opacity-50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold">Stay Updated</h4>
            <div className="flex flex-col gap-4">
               <div className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-lg px-3 py-2 text-sm w-full outline-none focus:ring-2 ring-primary/20"
                />
                <button className="bg-primary text-primary-foreground px-3 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                  Join
                </button>
              </div>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-muted-foreground group text-sm">
                  <Phone className="text-primary/60 shrink-0" size={16} />
                  <span>+1 (555) 000-1234</span>
                </div>
                <div className="flex items-center gap-3 text-muted-foreground group text-sm">
                  <Mail className="text-primary/60 shrink-0" size={16} />
                  <span>admissions@horizon.edu</span>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex items-center gap-2 text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
              <ShieldCheck className="text-green-500" size={16} /> Accredited Institution
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
          <p>© {currentYear} Horizon Academy. Empowering leaders for tomorrow.</p>
          <div className="flex gap-6 uppercase tracking-tighter">
            <Link href="#" className="hover:text-primary transition-colors">Privacy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms</Link>
            <Link href="#" className="hover:text-primary transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;