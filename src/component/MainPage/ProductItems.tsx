import { Product } from "@/dummy/productDummy"
import React from 'react'
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"
import ProductCard from "./ProductCard"


// react-masonry-grid 써서 상품 리스트 표시
const ProductItems: React.FC<{ products: Product[]; category: string }> = ({ products, category }) => {
  return (
    <div className="w-full mt-5 p-12 h-full">
      <ResponsiveMasonry
        columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3, 1200: 4, 2000: 5 }}
      >
        <Masonry>
          {products.filter((x) => (category === "ALL") || (x.productCategory === category)).map((x) =>
            <ProductCard product={x} />
          )}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  )
}

export default ProductItems