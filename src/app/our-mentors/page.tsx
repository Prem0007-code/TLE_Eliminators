import MentorsSection, { Mentor } from '@/components/MentorsSection';
import PromoBar from '@/components/PromoBar';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || ''

async function getMentors(path: string): Promise<Mentor[]> {
  const url = path.startsWith('http') ? path : (API_BASE ? `${API_BASE}${path}` : path)
  const res = await fetch(url, { next: { revalidate: 60 } })
  if (!res.ok) return []
  return res.json()
}

export default async function OurMentorsPage() {
  let mentors = await getMentors('/api/mentors')
  // Fallback: try legacy endpoints if unified returns nothing
  if (!mentors || mentors.length === 0) {
    const [cur, past] = await Promise.all([
      getMentors('/api/mentors/current'),
      getMentors('/api/mentors/past'),
    ])
    mentors = [...(cur || []), ...(past || [])]
  }
  return (
    <>
      <PromoBar />
      <MentorsSection current={mentors} past={[]} />
    </>
  )
}
