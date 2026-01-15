import type { Metadata } from 'next';
import LivestockInvestmentClientPage from './client-page';

export const metadata: Metadata = {
  title: 'Invest | Community Livestock Fund',
  description: 'Secure your allocation in the Community Livestock Fund. A tangible, asset-backed investment in America\'s food supply chain.',
  robots: 'noindex, nofollow', // Hide from search engines
};

export default function LivestockInvestmentPage() {
  return <LivestockInvestmentClientPage />;
}
