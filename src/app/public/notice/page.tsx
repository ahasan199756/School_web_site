import React from 'react';
import { Calendar, ChevronRight } from 'lucide-react';

export default function NoticePage() {
  const notices = [
    { id: 1, title: "Final Term Examination Schedule", date: "Oct 15, 2026", type: "Academic" },
    { id: 2, title: "Annual Sports Day Registration", date: "Oct 10, 2026", type: "Event" },
    { id: 3, title: "School Closed for National Holiday", date: "Oct 05, 2026", type: "General" },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Notice Board</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Stay updated with the latest school announcements.</p>
      </div>

      <div className="max-w-4xl mx-auto space-y-6">
        {notices.map((notice) => (
          <div key={notice.id} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between hover:shadow-md transition-shadow">
            <div className="mb-4 sm:mb-0">
              <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 block">
                {notice.type}
              </span>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white">{notice.title}</h2>
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-2">
                <Calendar className="w-4 h-4 mr-2" />
                {notice.date}
              </div>
            </div>
            <button className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium">
              Read More <ChevronRight className="w-5 h-5 ml-1" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}