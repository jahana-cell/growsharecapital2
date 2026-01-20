import type { Metadata } from 'next';
import SeniorCareClientPage from './client-page';

export const metadata: Metadata = {
    title: "Senior Care Workforce | A GrowShare Capital Thesis",
    description: "Investing in the human infrastructure of the Silver Economy. Professionalizing care, creating jobs, and ensuring dignity in aging.",
    openGraph: {
        title: "The Dignity of Aging | GrowShare Capital",
        description: "Our investment thesis for building a skilled, professional workforce to support the aging global population.",
        images: [
            {
                url: 'https://images.pexels.com/photos/339620/pexels-photo-339620.jpeg',
                width: 1200,
                height: 630,
                alt: 'Senior care professional assisting an elderly patient.',
            },
        ],
    },
};

export default function SeniorCarePage() {
  return <SeniorCareClientPage />;
}
