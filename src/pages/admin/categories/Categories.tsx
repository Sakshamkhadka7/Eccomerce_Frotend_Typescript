import { useEffect } from "react";
import IndexAdmin from "../IndexAdmin";
import CategoryTable from "./components/CategoryTable";
import { fetchCategories } from "../../../store/adminCategoriesSlice";
import { useAppDispatch, useAppSelector } from "../../../store/hook";

export interface ICategory {
  categoryId: string;
  categoryName: string;
}

const Categories = () => {
  const dispatch = useAppDispatch();
   
  const {items:categories}=useAppSelector((store)=> store.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <IndexAdmin>
      <CategoryTable categories={categories} />
    </IndexAdmin>
  );
};

export default Categories;
