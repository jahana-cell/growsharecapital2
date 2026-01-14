export type Story = {
  id: string;
  slug: string;
  title: string;
  category: string;
  date: string;
  image: string;
  content: string;
};

export const storiesData: Story[] = [
  {
    id: '1',
    slug: 'story-1',
    title: 'The Future of Urban Farming',
    category: 'Agriculture',
    date: '2024-07-20',
    image: 'https://images.unsplash.com/photo-1587883985148-7353f8a377b8?q=80&w=1600',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '2',
    slug: 'story-2',
    title: 'Innovations in Telemedicine',
    category: 'Healthcare',
    date: '2024-07-18',
    image: 'https://images.unsplash.com/photo-1584432810601-6c7f27d2362b?q=80&w=1600',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
  {
    id: '3',
    slug: 'story-3',
    title: 'Sustainable Housing Solutions',
    category: 'Real Estate',
    date: '2024-07-15',
    image: 'https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=1600',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  },
];
