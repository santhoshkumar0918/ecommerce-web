import { Button } from "@/components/ui/button";
import ProductsView from "@/components/ui/ProductsView";
import { getAllProducts } from "@/sanity/lib/products/getAllProducts";
import Image from "next/image";

export default async function Home() {

  const products = await getAllProducts();
  return (
    <>
      <div className="bg-blue-400">hello 1233
        
        <div>
          <ProductsView products={products}/>
        </div>
    </div>
    
    </>
  );
}
