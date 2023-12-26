import { Fragment, useContext } from "react"
import { CategoriesContext } from "../../contexts/CategoriesContext.jsx"
import CategoryPreviewComponent from "../../components/categoryPreview/CategoryPreviewComponent.jsx";

function CategoriesPreviewComponent() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        // console.log(title, 'title'); // Wrap with curly braces
        const products = categoriesMap[title];
        return (
          <CategoryPreviewComponent key={title} title={title} products={products} />
        );
      })}
    </Fragment>
  );
}


export default CategoriesPreviewComponent