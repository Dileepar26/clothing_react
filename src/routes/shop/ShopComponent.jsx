import { useContext } from "react"
import { ProductsContext } from "../../contexts/ProductsContext"
import ProductCardComponent from "../../components/productCard/ProductCardComponent.jsx"
import './shopStyle.scss'

function ShopComponent() {
    const {products} = useContext(ProductsContext)
  return (
    <div className="products-container">
        {products.map((product) => (
            <ProductCardComponent key = {product.id} product = {product}/>
        ))}
    </div>
  )
}

export default ShopComponent