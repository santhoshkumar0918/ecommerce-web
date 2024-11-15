"use client"
import { Product } from "@/sanity.types"
import Link from "next/link";

function ProductThumb({ product}: { product: Product }) {
    const isOutOfStock = product.stock != null && product.stock <= 0;
    return (
        <Link
            href={`/product/${product.slug?.current}`}
            className={`group flex flex-col p-2  bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-sm transition-all duration-200 overflow-hidden
            ${isOutOfStock ? "opacity-50" : ""}`}>
            <div>
                {a && (
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                        <span className="text-white font-bold text-xl ">Out of Stock</span>
                    </div>
                )}
            </div>
            
        </Link>
    )   
}

export default ProductThumb