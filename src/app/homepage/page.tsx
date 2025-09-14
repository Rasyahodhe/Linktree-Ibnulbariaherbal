import { Metadata } from "next";
import Homepage from "./homepag";
export const metadata: Metadata = {
  title: "Home",
  description: "Home",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Home() {
  return (
    <div className="w-full h-[100vh] ">
      <Homepage />
    </div>
  );
}
