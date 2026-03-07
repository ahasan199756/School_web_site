import DashboardLayout from "@/components/layout/DashboardLayout";

export default function StudentDashboard() {
  return (
    <DashboardLayout pageTitle="Overview" role="Student">
      {/* Your dashboard widgets go here! */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass p-6 rounded-2xl border h-40">Widget 1</div>
        <div className="glass p-6 rounded-2xl border h-40">Widget 2</div>
        <div className="glass p-6 rounded-2xl border h-40">Widget 3</div>
      </div>
    </DashboardLayout>
  );
}