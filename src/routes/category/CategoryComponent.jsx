
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { CategoriesContext } from '../../contexts/CategoriesContext';
import ProductCardComponent from '../../components/productCard/ProductCardComponent';
import './categoryStyle.scss'

const CategoryComponent = () => {
    const { category } = useParams();
    const { categoriesMap } = useContext(CategoriesContext);
    const [products, setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
        setProducts(categoriesMap[category]);
    }, [category, categoriesMap])
    return (
        <div className="category-container">
            {products && products.map((product) => (
                <ProductCardComponent key={product.id} product={product} />
            ))}
        </div>
    )
}

export default CategoryComponent