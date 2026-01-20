import type { Metadata } from 'next';
import TelemedicineClientPage from './client-page';

export const metadata: Metadata = {
    title: "Digital Health & Global Trade | A GrowShare Capital Thesis",
    description: "Exporting medical expertise and building resilient digital infrastructure. Connecting patients, providers, and markets globally.",
    openGraph: {
        title: "Healthcare Without Borders | GrowShare Capital",
        description: "Democratizing access to world-class expertise through scalable, resilient digital infrastructure.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1705615791240-c35f4799863b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
                width: 1200,
                height: 630,
                alt: 'Digital health network visualization.',
            },
        ],
    },
};

export default function TelemedicinePage() {
  return <TelemedicineClientPage />;
}
