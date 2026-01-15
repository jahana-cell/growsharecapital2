import { Leaf, Heart, Building } from 'lucide-react';

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
  <div className="bg-card p-8 rounded-lg shadow-lg text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-2xl font-bold text-foreground mb-4 font-serif">{title}</h3>
    <p className="text-muted-foreground">{description}</p>
  </div>
);

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-foreground mb-12 font-serif">Our Focus Areas</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Leaf size={48} className="text-accent" />}
            title="Livestock"
            description="Investing in sustainable and profitable livestock projects that empower local communities and ensure food security."
          />
          <FeatureCard
            icon={<Heart size={48} className="text-accent" />}
            title="Healthcare"
            description="Supporting innovative healthcare solutions that improve access to quality medical services and enhance community well-being."
          />
          <FeatureCard
            icon={<Building size={48} className="text-accent" />}
            title="Affordable Housing"
            description="Developing and financing affordable housing projects that provide safe, decent, and affordable homes for families."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
