"use client";

import { useState } from "react";
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
  const [tab, setTab] = useState<"current" | "past">("current");

  const currentCount = current.length;
  const pastCount = past.length;
  const list = tab === "current" ? current : past;

  return (
    <section className="bg-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0a1535]">
          Our Mentors
        </h1>
        <p className="mt-4 text-gray-500 max-w-3xl mx-auto leading-relaxed">
          With most TLE Mentors holding
          {" "}
          <span className="font-semibold text-blue-600">Expert</span>
          {" "}or{" "}
          <span className="font-semibold text-fuchsia-600">Candidate Master</span>
          {" "}ranks on Codeforces, we ensure that
          <br className="hidden sm:block" />
          none of your coding doubts go unresolved.
        </p>

        {/* Tabs */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex rounded-xl bg-blue-50 p-1 shadow-sm border border-blue-100">
            <button
              className={`px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-[15px] font-semibold transition-colors ${
                tab === "current"
                  ? "bg-blue-600 text-white shadow"
                  : "text-blue-600 hover:text-blue-700"
              }`}
              onClick={() => setTab("current")}
            >
              Current Mentors ({currentCount})
            </button>
            <button
              className={`px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-[15px] font-semibold transition-colors ${
                tab === "past"
                  ? "bg-blue-600 text-white shadow"
                  : "text-blue-600 hover:text-blue-700"
              }`}
              onClick={() => setTab("past")}
            >
              Past Mentors ({pastCount})
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((mentor) => (
            <MentorCard key={mentor.name} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}

