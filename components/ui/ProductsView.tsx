import { Category, Product } from "@/sanity.types"



interface ProductsViewProps{
    products: Product[],
    categories : Category[],
}


const ProductsView = ({ products,categories }: ProductsViewProps) => {
     

    return (
        <div>
            {/* categories */}
            <div className="flex flex-col "> 
            {/* <CategoriesView categories={categories}/> */}
            </div>
            {/* products */}
            <div>
                <div>
                {/* <ProductsGrid products={ products} /> */}
                    <hr className="w-1/2 sm:w-3/4"></hr>
                    </div>
            </div>
     </div>
    )
}
 
export default ProductsView;