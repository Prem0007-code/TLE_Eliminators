"use client";
import MentorCard from "@/components/MentorCard";

export interface Mentor {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  socials: {
    linkedin: string;
    leetcode?: string;
  };
}

interface MentorsSectionProps {
  current: Mentor[];
  past: Mentor[];
}

export default function MentorsSection({ current, past }: MentorsSectionProps) {
  const list = [...current, ...past];

  return (
    <section className="bg-[#0a1022] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
          Our Mentors
        </h1>
        <p className="mt-4 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          With most TLE Mentors holding
          {" "}
          <span className="font-semibold text-green-400">Expert</span>
          {" "}or{" "}
          <span className="font-semibold text-green-400">Candidate Master</span>
          {" "}ranks on Codeforces, we ensure that
          <br className="hidden sm:block" />
          none of your coding doubts go unresolved.
        </p>

        {/* Tabs removed; showing all mentors together */}

        {/* Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
          {list.map((mentor) => (
            <div key={mentor.name} className="h-full">
              <MentorCard {...mentor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

