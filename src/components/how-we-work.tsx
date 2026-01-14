const HowWeWork = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-deep-blue mb-12 font-serif">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-5xl font-bold text-forest-green mb-4">1</div>
            <h3 className="text-2xl font-bold text-deep-blue mb-2">Identify</h3>
            <p className="text-gray-700">We identify high-potential projects with strong social and environmental impact.</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-forest-green mb-4">2</div>
            <h3 className="text-2xl font-bold text-deep-blue mb-2">Invest</h3>
            <p className="text-gray-700">We provide capital and strategic support to help our partners succeed.</p>
          </div>
          <div>
            <div className="text-5xl font-bold text-forest-green mb-4">3</div>
            <h3 className="text-2xl font-bold text-deep-blue mb-2">Grow</h3>
            <p className="text-gray-700">We work closely with our partners to build sustainable and profitable businesses.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
