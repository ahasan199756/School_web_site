// src/app/(auth)/login/page.tsx
import Link from "next/link";
import { School } from "lucide-react";

export default function LoginPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-card p-8 rounded-2xl border shadow-sm">
        <div className="text-center">
          <div className="mx-auto w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
            <School size={24} />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold">Welcome Back</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to access your portal
          </p>
        </div>
        
        <form className="mt-8 space-y-6">
          <div className="space-y-4">
            <div>
              <label htmlFor="role" className="block text-sm font-medium mb-1">Select Role</label>
              <select id="role" className="w-full px-3 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary outline-none">
                <option>Student</option>
                <option>Parent</option>
                <option>Staff / Admin</option>
              </select>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email / ID</label>
              <input id="email" type="email" required className="w-full px-3 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary outline-none" placeholder="student@horizon.edu" />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium mb-1">Password</label>
              <input id="password" type="password" required className="w-full px-3 py-2 border rounded-md bg-background focus:ring-2 focus:ring-primary outline-none" placeholder="••••••••" />
            </div>
          </div>

          <button type="submit" className="w-full py-2 px-4 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity">
            Sign In
          </button>
        </form>
        
        <div className="text-center text-sm">
          <Link href="/register" className="font-medium text-primary hover:underline">
            Don't have an account? Create one
          </Link>
        </div>
      </div>
    </div>
  );
}