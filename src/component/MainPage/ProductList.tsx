import { Tabs, TabsList } from "@/components/ui/tabs"
import CategoryItem from "./CategoryItem"

const categories = [
  'ALL', '상의', '하의', '신발', '모자', '안경'
]

const ProductList: React.FC<{ setFilter: React.Dispatch<React.SetStateAction<string>> }> = ({ setFilter }) => {

  return (
    <Tabs>
      <TabsList className={`mt-5 items-center flex justify-center bg-gray-300 h-fit`}>
        {categories.map((x) =>
          <CategoryItem name={x} setFilter={setFilter} key={x} />
        )}
      </TabsList>
    </Tabs>
  )
}

export default ProductList