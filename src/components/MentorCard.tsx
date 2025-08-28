import Image from 'next/image';
import Link from 'next/link';

interface MentorCardProps {
  name: string;
  title: string;
  imageUrl: string;
  description: string;
  socials: {
    linkedin: string;
    leetcode?: string;
  };
}

const MentorCard: React.FC<MentorCardProps> = ({ name, title, imageUrl, description, socials }) => {
  return (
    <div className="relative w-full h-full rounded-2xl p-[4px] bg-gradient-to-br from-sky-400/60 via-blue-500/55 to-indigo-500/60 shadow-[0_10px_40px_rgba(56,189,248,0.25)] overflow-hidden">
      <div className="w-full h-full bg-black backdrop-blur-sm border-2 border-white/15 rounded-2xl p-6 flex flex-col items-center text-center">
        <div className="relative w-32 h-32 mb-4">
          <Image
            src={imageUrl}
            alt={name}
            fill
            sizes="128px"
            className="rounded-full object-cover"
          />
        </div>
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-sm text-blue-400 mb-2">{title}</p>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <div className="flex items-center gap-4">
          {/* LinkedIn */}
          {socials.linkedin && (
            <Link
              href={socials.linkedin}
              target="_blank"
              aria-label={`Open ${name}'s LinkedIn profile`}
              className="text-[#0A66C2] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-300 rounded"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path d="M20.447 20.452H17.21v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.447-2.136 2.943v5.663H9.0V9h3.111v1.561h.045c.434-.823 1.494-1.69 3.074-1.69 3.29 0 3.894 2.166 3.894 4.983v6.598zM5.337 7.433a1.81 1.81 0 1 1 0-3.62 1.81 1.81 0 0 1 0 3.62zM6.882 20.452H3.787V9h3.095v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.728v20.543C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.728C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          )}
          
        {/* LeetCode */}
        {socials.leetcode && (
          <Link
            href={socials.leetcode}
            target="_blank"
            aria-label={`Open ${name}'s LeetCode profile`}
            className="text-[#FFA116] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-amber-300 rounded"
          >
            {/* Simplified LeetCode logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M14.59 3.59a2 2 0 0 1 2.82 0l3 3a2 2 0 1 1-2.83 2.82l-1.59-1.58-7.17 7.17 1.59 1.59a2 2 0 1 1-2.83 2.82l-3-3a2 2 0 0 1 0-2.82l3-3a2 2 0 0 1 2.83 0l1.59 1.59 4.24-4.24-1.59-1.59a2 2 0 0 1 0-2.82z" />
            </svg>
          </Link>
        )}
        </div>
      </div>
    </div>
  );
};

export default MentorCard;

