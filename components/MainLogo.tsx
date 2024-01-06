import Image from "next/image";
import Link from "next/link";
import { Twitter } from "lucide-react";
import logo from "@/public/logo.png";

const MainLogo = () => {
  return (
    <div className="flex justify-center items-center w-full sm:w-[680px] py-4 px-6 relative mt-12">
      <Link href="/word-details">
        <Image
          src={logo}
          alt="Capitech Nepal"
          className="hidden sm:block w-44 absolute left-[4rem] sm:left-[5rem] z-20 -top-[2rem] sm:-top-[3rem]"
        />
      </Link>

      <div className="w-full text-white p-12 py-6 sm:py-12 rounded-full flex justify-center sm:justify-end items-center bg-[#3EBCF7] -rotate-1 z-10">
        <div className="flex items-center gap-6 flex-wrap">
          <Link href="/word-details">
            <Image
              src={logo}
              alt="Capitech Nepal"
              className="w-[112px] block sm:hidden"
            />
          </Link>

          <div className="sm:flex flex-col gap-2 items-start hidden">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center bg-white text-black px-3 mr-2 shadow-xl py-1 rounded-md">
                <Twitter className="lg:w-6 lg:h-6 w-5 h-5" />
              </div>

              <p className="sm:text-2xl text-xl font-bold drop-shadow-2xl">
                capitech.nepal
              </p>
            </div>

            <p className="font-semibold text-sm sm:text-base">
              Follow us on twitter for latest updates
            </p>
          </div>
        </div>
      </div>

      <div className="w-full absolute text-white py-10 p-12 rounded-full flex justify-end items-center bg-background-primary rotate-[0.5deg] mt-4">
        <div className="flex flex-col gap-2 items-start">
          <div className="sm:flex items-center gap-2 hidden">
            <div className="flex items-center justify-center bg-white text-black px-3 mr-2 shadow-xl py-1 rounded-md">
              <Twitter />
            </div>
            <p className="sm:text-2xl text-xl font-bold drop-shadow-2xl">
              capitech.nepal
            </p>
          </div>

          <p className="font-semibold">
            Follow us on twitter for latest updates
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainLogo;
