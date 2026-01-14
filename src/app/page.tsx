import type { Metadata } from 'next';
import HomeClientPage from './home-client';
import { storiesData } from '@/app/news/stories-data';
import type { Story } from '@/app/news/stories-data';


// This function simulates fetching data. In a real app, this could be an API call.
// Since we can't do live DB calls during server-side builds in this environment,
// we use a local data file as a fallback.
async function getStories(): Promise<Story[]> {
    try {
        // We return a SLICED version of the local data.
        // The client will then attempt a live fetch if this is empty or stale.
        return storiesData.slice(0, 3).map(s => {
            const slug = s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
            return {
                ...s,
                id: slug,
                slug: slug,
            }
        }) as Story[];
    } catch (error) {
        console.error("Error preparing initial stories:", error);
        return [];
    }
}

export const metadata: Metadata = {
  title: 'Artisanal Abode | High-Yield, Principled Investments',
  description: 'A premier American private equity and impact investment platform building resilient communities through intelligent, ethical, and high-yield investments in real estate, agriculture, and healthcare.',
};

export default async function Page() {
    const stories = await getStories();
    // We pass the local data to the client component. 
    // The client component will handle fetching live data if needed.
    return <HomeClientPage initialStories={stories} />;
}
