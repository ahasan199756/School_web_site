import React from 'react';

export default function ManagementPage() {
  const leaders = [
    { id: 1, name: "Dr. Sarah Jenkins", role: "Principal", bio: "20+ years in educational leadership." },
    { id: 2, name: "Mr. Robert Chen", role: "Vice Principal", bio: "Specializes in curriculum development." },
    { id: 3, name: "Mrs. Emily Davis", role: "Head of Admissions", bio: "Guiding new families into our community." },
    { id: 4, name: "Dr. Michael Torres", role: "Dean of Students", bio: "Fostering a positive campus environment." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">School Management</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Meet the dedicated team leading our institution.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {leaders.map((leader) => (
          <div key={leader.id} className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 text-center hover:-translate-y-1 transition-transform duration-300">
            {/* Placeholder for Profile Image */}
            <div className="h-48 bg-gray-200 dark:bg-gray-700 w-full flex items-center justify-center">
              <span className="text-gray-400 dark:text-gray-500">Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{leader.name}</h3>
              <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-3">{leader.role}</p>
              <p className="text-gray-600 dark:text-gray-300 text-sm">{leader.bio}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}