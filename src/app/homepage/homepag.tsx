"use client";
import { dataLinktree } from "@/data/linktree";
import Image from "next/image";

const Homepage = () => {
  return (
    <div className="w-full">
      <div className="w-full md:max-w-4xl mx-auto flex flex-col items-center">
        <Image
          src={dataLinktree?.header?.imgHeader}
          alt="Logo"
          width={500}
          height={300}
          className="animate-zoom-in rounded-lg"
        />
        <div>
          <h1 className="transition-all duration-150 text-2xl sm:text-3xl font-bold text-center text-green-800">
            {dataLinktree?.header?.title}
          </h1>
          <p className="text-center font-bold text-sm sm:text-lg animate-opacity-play">
            {dataLinktree?.header?.description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
