import Homepage from "@/app/homepage/homepag";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Home",
  icons: {
    icon: "/logo.ico",
  },
};
export default function Home() {
  return (
    <div className="w-full h-[100vh] ">
      <Homepage />
    </div>
  );
}
