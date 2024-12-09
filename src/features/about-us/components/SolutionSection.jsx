import React from "react";
import logo from "../../../assets/logo/logo-only-big.png";

const SolutionSection = () => {
  return (
    <div>
      <section
        id="about"
        className="bg-white dark:bg-gray-800 relative pt-16 max-w-[1440px]"
      >
        {/* Title */}
        <div className="flex items-center justify-center pt-5 md:py-10">
          <img src={logo} alt="logo" className="h-12 w-12 mr-4" />
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">
            Greenly
          </h2>
        </div>

        {/* Photo Grid (Hidden on mobile) */}
        <div className="md:flex flex relative justify-center items-center gap-4 px-10 md:px-24">
          <div className="w-1/2 md:w-1/4 h-52 md:h-80  relative z-20">
            <img
              src="https://s3-alpha-sig.figma.com/img/89cf/7900/234965c5aa64889f9fa7913eb9223dfc?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=faWLhzaC-JRiTE2UAO5~ZumWFrjPaJvZ37g1Smk2ntpfMCsHDHouieTmwnvVUdIbHrlyhoWK-YaiKqRMagObUvi02mjmuy4X30JnmmNI2~EdRfWAqLNuTV4KnY4x5i-bWr8O3mceOk1ZAOARJRiVkZClu7nBdGCRZJuLV0yIT6nrcpctNY9U5TGZ504AM2DRnF8SSAdqPjzS7TiheOnmvg4cZ-GWTOsR5SxBB68Kw6CTvTqIMllRBmnqKdmFd8jF3t7UheL25XPUNmZpdshXjHkqcKFXiZrz59VDwp~rV7lw~SXGgGlMRuUFxvEjs86thVOFn3xQ9bCGIaB2JMvdjQ__"
              alt="Foto 1"
              className="rounded-lg object-cover h-full w-full translate-y-[70%] md:translate-y-[25%]"
            />
          </div>
          <div className="w-1/2 md:w-1/4 h-32 md:h-40  relative z-20">
            <img
              src="https://s3-alpha-sig.figma.com/img/7fac/cece/711d35f16d373c696c1064cd25ff0d62?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gCt4MDZsXdwwWhGHe~5Tm2nTT5BLNONLdj8ZMJRvs~YJhNgsHKPakhgNzDnoOlmZVIhOLjVuvO1w1gCZUW5inGP5KKjc25zDVtWm9zlKJMMlqwDBGqZ2d1Z9L8P0l7a8o-jFzII5mamLFTb7u7yefw~SaJa61k~Wq5L7vmmkyVyqSKuj0A2t52suh-aR~sbj9WslJO1bwOE6ZI6UeTKdgC6GtqmfXuFH0A9hLAu3Co7Am7wZpWyGkD8cBu8wPl~oSDsdVItgH0qC0HXeezIvXUFLrPFyxk46AEdWpYNeJfGDNzV4sMQONKH-QY6S3IdSztbexD9ZLzGwSPXKpZ-qRw__"
              alt="Foto 2"
              className="rounded-lg object-cover h-full w-full translate-y-[140%] md:translate-y-[60%]"
            />
          </div>
          <div className="w-1/4 h-80 relative z-20 hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/7aed/31d0/a6f56bbab094d55f3ca628dedbf1369c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OUk8UZicgdvsnK-hMv0j7SyDUjmGifI-QGO70BNEy86E1mJG7TZ4tkno2YWPPJykAj2v0IrBmm2nznMgDVKuFxMfIa9SpI75pzCshz~1~CkDu62VBYiFgqVhG0O96is2I4mGFbeMfMvzZ9gmQhhwYyO7c84uvEzACrt6bv12CBRLelzh9fgyemyUbSqXVanQfnb3mtSVWQPDcp-XqsJJKXxZ4Q58cY9G-XuhMenNIIDqfG3cATsc9ih5p1LBrhnwckFIZ~3qC9zNQxiV6SRoqCU~vlHdJtsPG46pcIYi3eNJO-EJg9HMZozba-e9hy~rhVyEOD3sMjsg8CpoP8m6CQ__"
              alt="Foto 3"
              className="rounded-lg object-cover h-full w-full translate-y-[25%]"
            />
          </div>
          <div className="w-1/4 h-40 relative z-20 hidden md:block">
            <img
              src="https://s3-alpha-sig.figma.com/img/51f1/c4ce/84462e2e70bfc9eadb291976498a195c?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oGhlD~wtfBH9BvN~LwHM~bj6Q4va~n9997akcbJxLFRJyOSrqMvJts2Bh0Vy39w~cnXVZNiQxQ~14cn9BGXzB4xtchmoJazXKhEAMhzR~Rv4KyDHM0pB4Oo1Iu-2hthvp7lU9e-E1r6t2z8NqvKtbVvVX-yg4n-SIlgomzZm~kl59wG7f8AetF87RNQazJ0sXnYeX2CAKjlGTxr4fA23xbtfPsqsCk1~Monw~vO67t2tFdyLFWBpPTGaMaSRdUPOuegTu1TyENAHDkdq09ndppQjDTo3VQ~p06rNv9HwzGipH9BWRVRqD8iVtuWmsYU9LIMJcviY3DwFBKooai-wiQ__"
              alt="Foto 4"
              className="rounded-lg object-cover h-full w-full translate-y-[60%]"
            />
          </div>
        </div>

        {/* Overlay Background (Hidden on mobile) */}
        <div className="absolute inset-x-0 bottom-0 bg-primary-05 z-0 h-1/2 md:block hidden"></div>

        {/* Description */}
        <div className="relative bg-primary-05 text-white text-center pt-32 pb-20 md:py-14 px-6 md:px-44 mt-20 z-10">
          <p className="text-lg md:text-xl font-bold">
            Solusi Digital untuk Masa Depan yang Berkelanjutan
          </p>
          <p className="mt-8 leading-relaxed md:pb-10">
            Greenly didirikan pada tahun 2024, terinspirasi oleh meningkatnya
            volume sampah global dan kebutuhan mendesak untuk mengedukasi serta
            melibatkan masyarakat dalam gerakan daur ulang. Aplikasi ini lahir
            dari visi sekelompok profesional lingkungan dan teknologi untuk
            menciptakan solusi digital yang mempermudah manajemen limbah dan
            mendorong keberlanjutan. Menggunakan teknologi modern, Greenly
            menawarkan panduan daur ulang, pelacakan limbah pribadi, dan
            platform komunitas untuk berbagi pengetahuan dan kolaborasi. Dengan
            fokus pada edukasi dan solusi praktis, Greenly bertujuan untuk
            menjadi katalisator perubahan gaya hidup menuju dunia yang lebih
            bersih dan berkelanjutan.
          </p>
        </div>
      </section>
    </div>
  );
};

export default SolutionSection;
