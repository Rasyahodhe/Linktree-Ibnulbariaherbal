import { Metadata } from "next";
import ProductsPage from "@/app/products/products";
export const metadata: Metadata = {
  title: "Products",
  description: "Products",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function Product() {
  return (
    <div>
      <ProductsPage />
    </div>
  );
}
