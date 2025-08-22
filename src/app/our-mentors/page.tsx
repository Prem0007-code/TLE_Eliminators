import MentorsSection, { Mentor } from '@/components/MentorsSection';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || ''

async function getMentors(path: string): Promise<Mentor[]> {
  const url = path.startsWith('http') ? path : `${API_BASE}${path}`
  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) return []
  return res.json()
}

export default async function OurMentorsPage() {
  const [currentMentors, pastMentors] = await Promise.all([
    getMentors('/api/mentors/current'),
    getMentors('/api/mentors/past'),
  ])
  return <MentorsSection current={currentMentors} past={pastMentors} />
}
