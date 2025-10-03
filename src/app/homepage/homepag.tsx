"use client";
import { dataLinktree } from "@/data/linktree";
import Image from "next/image";
import Link from "next/link";

const Homepage = () => {
  return (
    <div className="w-full h-[100vh] pt-[20px] md:pt-[50px] flex flex-col justify-between">
      <div className="w-full md:max-w-4xl mx-auto flex flex-col items-center">
        <Image
          src={dataLinktree?.header?.imgHeader}
          alt="Logo"
          width={500}
          height={300}
          className="animate-zoom-in rounded-lg"
        />
        <div>
          <h1 className="transition-all duration-150 text-3xl sm:text-4xl font-bold text-center text-green-800">
            {dataLinktree?.header?.title}
          </h1>
          {/* <p className="text-center font-bold text-sm sm:text-lg animate-opacity-play">
            {dataLinktree?.header?.description}
          </p> */}
        </div>
        <div className="w-full p-4 md:w-full md:p-0 md:mt-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
            {dataLinktree?.linktree?.map((item, index) => (
              <Link
                key={index}
                href={item?.link || "#"} // ganti sesuai field link kamu
                className={`p-2 grid grid-cols-[auto_1fr] gap-2  border border-green-800 rounded-2xl ${item?.bgcolorHover}`}
              >
                <Image
                  src={item?.image}
                  alt="Logo"
                  width={200}
                  height={100}
                  className="animate-zoom-in rounded-lg w-6 h-6"
                />
                <p className="flex items-center justify-center text-center font-bold text-sm sm:text-[13px] animate-opacity-play h-6">
                  {item?.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      <footer className="w-full bg-green-800">
        <p className="text-center text-sm  text-white">
          &copy; {new Date().getFullYear()} IBNUL BARIA HERBAL
        </p>
        <p className="text-center text-sm text-white">
          Created By La Ode Rahimsyah
        </p>
      </footer>
    </div>
  );
};

export default Homepage;
