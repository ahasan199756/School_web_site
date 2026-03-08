import React from 'react';
import { BookOpen, Monitor, Dribbble, Beaker, Utensils, Music } from 'lucide-react';

export default function FacilitiesPage() {
  const facilities = [
    { id: 1, name: "Central Library", icon: BookOpen, desc: "Over 50,000 volumes, quiet study zones, and digital archives." },
    { id: 2, name: "Science Labs", icon: Beaker, desc: "State-of-the-art physics, chemistry, and biology laboratories." },
    { id: 3, name: "Computer Center", icon: Monitor, desc: "High-speed iMac labs for coding and digital arts." },
    { id: 4, name: "Sports Complex", icon: Dribbble, desc: "Indoor basketball courts, swimming pool, and athletic track." },
    { id: 5, name: "Cafeteria", icon: Utensils, desc: "Nutritious, diverse meal options prepared fresh daily." },
    { id: 6, name: "Arts & Music Studio", icon: Music, desc: "Soundproof practice rooms and a modern art studio." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 min-h-screen">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Campus Facilities</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">Discover the spaces where our students learn, create, and grow.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((facility) => {
          const Icon = facility.icon;
          return (
            <div key={facility.id} className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow">
              <div className="w-14 h-14 bg-blue-50 dark:bg-blue-900/30 rounded-xl flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{facility.name}</h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {facility.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}