import Image from 'next/image';

const WhoWeAre = () => {
  return (
    <section className="py-20 bg-cream-base">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-truffle-dark mb-12 font-serif">Who We Are</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-lg text-cream-text leading-relaxed">
              Artisanal Abode is a premier American private equity and impact investment platform. We are dedicated to building resilient communities through intelligent, ethical, and high-yield investments. Our focus is on creating sustainable value and positive social impact in the areas of livestock, healthcare, and affordable housing.
            </p>
          </div>
          <div>
            <Image
              src="/who-we-are.jpg"
              alt="Who We Are"
              width={800}
              height={600}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
