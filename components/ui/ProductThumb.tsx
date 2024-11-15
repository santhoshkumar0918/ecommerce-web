"use client"
import { Product } from "@/sanity.types"
import Image from "next/image";
import Link from "next/link";

function ProductThumb({ product}: { product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;
    return (
        <Link
            href={`/product/${product.slug?.current}`}
            className={`group flex flex-col p-2  bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-sm transition-all duration-200 overflow-hidden
            ${isOutOfStock ? "opacity-50" : ""}`}>
            <div className="relative aspect-square w-full h-full overflow-hidden">
                {product.Image && (
                    <Image
                        src={ImageUrlBuilder(product.Image)}
                        className="object-contain transition-transform duration-300 group-hover:scale-105"
                        alt={product.name || "Product Image"}
                        fill
                        sizes="(max-width : 768px) 100vw ,(max-width: 1200px) 50vw, 33vw "
                        
                    ></Image>
                )}
                {isOutOfStock && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span className="text-white font-bold text-xl ">Out of Stock</span>
                    </div>
                )}
            </div>
            
        </Link>
    )   
}

export default ProductThumb