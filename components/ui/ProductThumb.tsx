"use client"
import { Product } from "@/sanity.types"
import React from "react"

function ProductThumb({ product}: { product: Product }) {
    const isOutOfStock = product.stock !== null && (product.stock??0 )<= 0;
    return (
<></>
    )   
}

export default ProductThumb