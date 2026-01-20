import type { Metadata } from 'next';
import ExportLabClientPage from './client-page';

export const metadata: Metadata = {
    title: "Hach Analytics Bangladesh | Strategic Business Plan",
    description: "A lean, high-margin model for exporting high-precision water quality testing equipment to the industrial market in Bangladesh.",
    openGraph: {
        title: "Precision for a Thirsty World | Hach Analytics",
        description: "Business plan for the export and distribution of environmental monitoring technology.",
        images: [
            {
                url: 'https://images.unsplash.com/photo-1581093588401-fbb073d78124?q=80&w=2070',
                width: 1200,
                height: 630,
                alt: 'Industrial water testing laboratory.',
            },
        ],
    },
};

export default function ExportLabPage() {
  return <ExportLabClientPage />;
}