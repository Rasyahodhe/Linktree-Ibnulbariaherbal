import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Products",
  description: "Products",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Product() {
  return <div>Product</div>;
}
