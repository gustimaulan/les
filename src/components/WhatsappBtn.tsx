import React from "react";

interface WhatsappBtnProps {
  message: string;
  btnText: string;
}

const WhatsappBtn: React.FC<WhatsappBtnProps> = ({ message, btnText }) => {
  const handleWhatsapp = () => {
    const url = `https://api.whatsapp.com/send?phone=6289506851030&text=${encodeURIComponent(
      message
    )}`;
    if (window.fbq) {
      window.fbq("track", "AddToCart");
    }
    window.open(url, "_blank");
  };

  return (
    <section id="join">
      <div className="pt-8">
        <p className="text-2xl text-center">
          Ayo gabung sekarang bersama ratusan siswa lainnya..
        </p>
        <img
          src="./images/panah-gif.gif"
          alt="panah gif"
          className="mx-auto"
        ></img>
        <button
          onClick={handleWhatsapp}
          className="flex justify-center items-center gap-2 bg-green-700 text-white rounded-lg p-6 w-full hover:bg-green-800"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="#fff"
              className=""
            >
              <path d="M20.52 3.5A11.43 11.43 0 0 0 2.69 17.63L1.5 22.5l4.96-1.18a11.42 11.42 0 0 0 5.57 1.42h.05A11.44 11.44 0 0 0 20.52 3.5zM12 20.24a9.44 9.44 0 0 1-4.8-1.3l-.34-.2-2.95.7.63-2.88-.22-.3a9.43 9.43 0 1 1 17.1-5.5 9.43 9.43 0 0 1-9.42 9.48zm5.25-7.16c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.64.07a7.62 7.62 0 0 1-2.24-1.4 8.37 8.37 0 0 1-1.55-1.93c-.17-.3 0-.44.14-.6.14-.15.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.24-.25-.6-.5-.52-.67-.52-.17 0-.37 0-.57 0-.2 0-.52.07-.8.37-.27.3-1.05 1.03-1.05 2.5s1.08 2.88 1.24 3.07c.15.2 2.12 3.25 5.13 4.55.72.3 1.28.47 1.72.6.72.23 1.37.2 1.87.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.18-1.42-.07-.1-.27-.17-.57-.3z" />
            </svg>
          </span>
          {btnText}
        </button>
        <div className="flex flex-col items-center justify-center pt-2 mt-8 gap-2">
          <div className="flex items-center justify-center">
            <img
              src="./images/sd-6.webp"
              alt="sd"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
            />
            <img
              src="./images/calistung-2.webp"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
              alt="calistung"
            />
            <img
              src="./images/smp-1.webp"
              alt="smp"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
            />
            <img
              src="./images/sma-1.webp"
              alt="smp"
              className="relative inline-flex -mr-4 w-12 h-12 rounded-full border-4 border-gray-700"
            />
            <img
              src="./images/calistung-1.webp"
              alt="calistung"
              className="relative inline-flex w-12 h-12 rounded-full border-4 border-gray-700"
            />
          </div>
          <div className="flex flex-col text-center">
            <p className="text-yellow-400 text-2xl">★★★★★</p>{" "}
            <p className="text-sm">(99+ siswa telah mendaftar)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatsappBtn;
function fbq(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}
