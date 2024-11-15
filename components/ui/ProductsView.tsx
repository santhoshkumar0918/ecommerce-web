"use client"
import { Category, Product } from "@/sanity.types"
import ProductGrid from "./ProductGrid"


interface ProductsViewProps{
    products: Product[],
    categories : Category[],
}


const ProductsView = ({ products,categories }: ProductsViewProps) => {
     

    return (
        <div>
            {/* categories */}
            <div className="flex flex-col "> 
            {/* <CategoriesSelectorComponent categories={categories}/> */}
            </div>
            {/* products */}
            <div>
                <div>
                <ProductGrid products={ products} />
                    <hr className="w-1/2 sm:w-3/4"></hr>
                    </div>
            </div>
     </div>
    )
}
 
export default ProductsView;