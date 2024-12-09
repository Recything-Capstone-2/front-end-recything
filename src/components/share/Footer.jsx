import imglogosecond from "../../assets/logo/logo-transparent.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { ImLinkedin } from "react-icons/im";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-primary-05 text-white font-inter">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-9 items-center py-10 gap-y-3 md:gap-y-0 px-9 md:px-0">
        <div className="col-span-1 md:col-span-3 text-center md:text-left space-y-5">
          <img
            src={imglogosecond}
            alt="Greenly Logo"
            className="mx-auto md:mx-0"
          />
          <p className="text-secondary-04">
            Hijaukan Dunia, Mulai dari Aksi Kecilmu.
          </p>
          <div className="flex justify-center md:justify-start gap-x-3">
            <a href="">
              <FaXTwitter size={30} />
            </a>
            <a href="">
              <FaInstagram size={30} />
            </a>
            <a href="">
              <FaYoutube size={30} />
            </a>
            <a href="">
              <ImLinkedin size={30} />
            </a>
          </div>
        </div>

        <div className="col-span-1 md:col-span-2 text-center md:text-left py-5 md:py-0">
          <h5 className="text-lg font-bold">Layanan</h5>
          <ul>
            <li className="py-2">
              <Link to={"/"}>Beranda</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>Pelaporan</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>Edukasi</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>Tentang Kami</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 text-center md:text-left pb-5 md:py-0">
          <h5 className="text-lg font-bold">Legal</h5>
          <ul>
            <li className="py-2">
              <Link to={"/"}>Kebijakan Privasi</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>Syarat dan Ketentuan</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>Faq</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>Bantuan</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-2 text-center md:text-left h-full pb-5 md:py-0">
          <h5 className="text-lg font-bold">Hubungi Kami</h5>
          <ul>
            <li className="py-2">
              <Link to={"/"}>greenly@gmail.com</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>Indonesia, Bogor</Link>
            </li>
            <li className="py-2">
              <Link to={"/"}>(+62) 812 3456 7890</Link>
            </li>
          </ul>
        </div>

        <div className="col-span-1 md:col-span-9 text-center border-t border-white w-full mt-8">
          <p className="text-white mt-4">
            © 2024 Greenly. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
