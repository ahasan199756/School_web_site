// src/app/(dashboard)/student/page.tsx
import { Book, Calendar, Award } from "lucide-react";

export default function StudentDashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Student Portal</h1>
      
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="p-6 border rounded-xl bg-card flex items-center gap-4">
          <div className="p-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
            <Book size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Current GPA</p>
            <p className="text-2xl font-bold">3.8</p>
          </div>
        </div>
        
        <div className="p-6 border rounded-xl bg-card flex items-center gap-4">
          <div className="p-3 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-lg">
            <Calendar size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Attendance</p>
            <p className="text-2xl font-bold">96%</p>
          </div>
        </div>

        <div className="p-6 border rounded-xl bg-card flex items-center gap-4">
          <div className="p-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg">
            <Award size={24} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground">Credits Earned</p>
            <p className="text-2xl font-bold">84</p>
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="border rounded-xl bg-card p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Announcements</h2>
        <div className="space-y-4">
          <div className="pb-4 border-b">
            <p className="font-medium">Spring Registration Opens Tomorrow</p>
            <p className="text-sm text-muted-foreground">Make sure to consult with your advisor before selecting courses.</p>
          </div>
          <div className="pb-4">
            <p className="font-medium">Science Fair Updates</p>
            <p className="text-sm text-muted-foreground">Project proposals are due by Friday at 5:00 PM.</p>
          </div>
        </div>
      </div>
    </div>
  );
}