import { Route, Routes } from "react-router-dom";
import './shopStyle.scss'
import CategoriesPreviewComponent from "../categoriesPreview/CategoriesPreviewComponent";
import CategoryComponent from "../category/CategoryComponent";

function ShopComponent() {
  return (
    <Routes>
      <Route index element = {<CategoriesPreviewComponent/>}/>
      <Route path=":category" element = {<CategoryComponent/>}/>
    </Routes>
  );
}


export default ShopComponent