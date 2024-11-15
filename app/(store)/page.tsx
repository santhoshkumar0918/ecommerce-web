import { Button } from "@/components/ui/button";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {

  const products = await getAllProducts();
  return (
    <>
    <div className="bg-blue-400">hello 1233</div>
    <Button className="">Click me</Button>
    </>
  );
}
