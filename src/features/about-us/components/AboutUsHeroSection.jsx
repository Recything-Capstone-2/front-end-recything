import React from "react";

const AboutUsHeroSection = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat h-screen flex items-center"
      style={{
        backgroundImage:
          "url('https://s3-alpha-sig.figma.com/img/1d15/5cf8/6b3b66944bed14a442aa7998a689b85c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=HWauARPr9X54IUyHcbHpZrVK-~e8hStGtBjQMMhXDDnVjL3TappRn-or3WADNNeVwvPsGV8-hWpezF69NHJul-u1A4eJRr9cEq0pqvGymCdaTaqJmttcDtjjb6O-EbhiBUXUVrT4p3BuxVnOQqiC6bP-eyfsZ93LAzNEafBWzL7~kocWGWBWL4k1YYBi87LnRQGkI7ZN0M1ccsw0Db~H6HLsBVQ0iR0qkJnpepRCsYQRMdRL51Vv-bpFT05Uaa23ZSUSIXR81twuqP9FWcBQv8-bW~AmWtAHq2K8GnbJO86xNp6NfGn5qmoxDMO6b~WULlwyQr9q2jwOYAig1gzMbQ__')",
      }}
    >
      <div className="bg-black bg-opacity-60 w-full h-full absolute inset-0"></div>
      <div className="relative z-10 max-w-4xl px-8 md:px-12 lg:px-32">
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
          Tentang Kami
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl">
          Greenly hadir untuk membantu dunia menjadi lebih hijau melalui aksi
          daur ulang dan edukasi lingkungan.
        </p>
      </div>
    </section>
  );
};

export default AboutUsHeroSection;
