import background from "../../../assets/images/background-1.png";
import image from "../../../assets/images/image-auth.png";

export default function AuthLayout({ children }) {
  return (
    <main
      className="min-h-screen flex md:flex-row"
      style={{ backgroundImage: `url(${background})` }}
    >
      <section className="md:w-2/5 hidden md:flex flex-col justify-center items-center bg-[${background}] relative">
        <h3 className="text-4xl font-bold text-center text-white w-96 leading-relaxed h-1/2 flex justify-center items-center">
          Setiap Langkahmu untuk Lingkungan Dimulai di Sini!
        </h3>
        <div className="w-96  flex justify-center items-center">
          <img src={image} alt="" className="" />
        </div>
      </section>
      <section className="md:w-3/5 flex justify-center items-center bg-white dark:bg-gray-800 shadow-2xl shadow-gray-500 md:rounded-s-3xl p-4 md:p-0">
        {children}
      </section>
    </main>
  );
}
