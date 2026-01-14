import Image from 'next/image';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <Image
        src="/hero-background.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center">
        <h1 className="text-6xl font-bold font-serif mb-4">Artisanal Abode</h1>
        <p className="text-xl font-sans">
          A premier platform for impactful investments in livestock, healthcare, and affordable housing.
        </p>
      </div>
    </section>
  );
};

export default Hero;
