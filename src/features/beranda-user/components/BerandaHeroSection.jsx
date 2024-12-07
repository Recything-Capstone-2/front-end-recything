import React from "react";
import { useNavigate } from "react-router-dom";
import point from "../../../assets/images/poin.png";
import useUser from "../../../store/userStore";
import usePoints from "../hooks/usePoints";
import LoadingSpinner from "../../../components/ui/LoadingSpinner.jsx";

const BerandaHeroSection = () => {
  const { user: currentUser } = useUser();
  const userName = currentUser?.nama_lengkap || "User";
  const { points: userPoints, loading, error } = usePoints();
  const navigate = useNavigate();

  const handleReportClick = () => {
    navigate("/report");
  };

  return (
    <div className="flex flex-col lg:flex-row bg-green-50 pt-8 lg:pt-16 pb-8 px-6 lg:px-24 rounded-lg gap-4 lg:items-end">
      <div className="flex flex-col bg-green-50 px-6 rounded-lg space-y-4 basis-full lg:basis-5/12">
        <div>
          <h1 className="text-3xl lg:text-4xl font-bold pb-3">
            Hallo, {userName}
          </h1>
          <p className="text-lg lg:text-xl text-gray-600 pb-3">
            Selamat Datang di Greenly!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row bg-primary-01 rounded-lg shadow-inner overflow-hidden">
          <div className="flex-shrink-0 w-full lg:w-2/4">
            <img
              src="https://s3-alpha-sig.figma.com/img/165b/588a/0b0a2cf7ce0a991f666abbedccec0d27?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VkzVLftOpvCe5KLb-Qx1ar5DoJr3GH-Xfnh80zyukRZsBPeXc6bE7csUXFcyM90UgCUnb~E4QJQhU5vXv~ExaflS~IkpyZkNTySIxbSnRjZ7uwg7AJEZV8k3NuuuvdnvLtCOWPyrS9hgwhbzFrHKG31QJRp-jykUQrI1MX0HVwYQaIjGdZSd8O2E1S6MJKiGr0-Jbg9a2q20MvlmXaIvOzW1PkOQkOSWU7bjC8ZfNOD7o5FVHf1IBhUg8LUXVymMPbtmirF9r7VPNqv6KIJlMg1aD15AIeu7xJ-xr7vbuokk093IEHPEaO1OKTpsM0~VyUR~7LRX5esqu50zo8NrRA__"
              alt="Illustration"
              className="w-full h-full object-cover transform scale-x-[-1] rounded-t-lg lg:rounded-s-lg"
            />
          </div>

          <div className="flex flex-col justify-center pt-6 px-6 flex-grow space-y-2">
            <img
              src={point}
              alt="point"
              className="h-12 lg:h-16 w-12 lg:w-16"
            />
            <h3 className="font-medium text-xl lg:text-2xl">POINKU</h3>
            <div className="bg-primary-01 pb-4 rounded-lg">
              <div className="flex flex-col">
                <span className="text-4xl lg:text-5xl font-bold">
                  {loading ? (
                    <span className="text-lg font-medium">
                      <LoadingSpinner />
                    </span>
                  ) : error ? (
                    <span className="text-lg font-medium text-red-600">
                      {JSON.stringify(error)}
                    </span>
                  ) : (
                    userPoints
                  )}
                </span>
                <button className="mt-5 text-sm text-green-600 hover:text-green-800 text-right">
                  Tukar Poin &gt;
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-primary-01 py-8 lg:py-12 px-6 lg:px-20 rounded-lg shadow-md basis-full lg:basis-7/12">
        <h2 className="text-3xl lg:text-4xl pb-5 font-semibold">
          Melihat sampah menumpuk dan tidak pada tempatnya?
        </h2>
        <p className="text-lg lg:text-xl mt-4">
          Yuk, laporkan melalui Greenly dan dapatkan poin sebagai apresiasi atas
          kontribusi Anda dalam menjaga kebersihan lingkungan!
        </p>
        <div className="flex justify-center">
          <button
            className="mt-6 lg:mt-12 bg-primary-05 hover:bg-green-700 text-white py-2 px-20 lg:px-28 rounded-lg transition-all duration-300"
            onClick={handleReportClick}
          >
            Lapor Disini!
          </button>
        </div>
      </div>
    </div>
  );
};

export default BerandaHeroSection;
