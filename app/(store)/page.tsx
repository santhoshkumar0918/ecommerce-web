import { Button } from "@/components/ui/button";
import ProductsView from "@/components/ui/ProductsView";
import { getAllCategories } from "@/sanity/lib/products/getAllCategories";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {

  const products = await getAllProducts();
  const categories = await getAllCategories();
  return (
    <>
      <div className="bg-blue-400">hello 1233
        
        <div className="flex flex-col items-center justify-top min-h-screen bg-gray-100">
          <ProductsView products={products}/>
        </div>
    </div>
    
    </>
  );
}
