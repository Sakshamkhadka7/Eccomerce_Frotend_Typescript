import { useEffect, useState } from "react";
import IndexAdmin from "../IndexAdmin";
import CategoryTable from "./components/CategoryTable";
import { API } from "../../../http";

export interface ICategory {
  categoryId: string;
  categoryName: string;
}

const Categories = () => {


  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await API.get(
        "http://localhost:3000/api/category/getCategory",
        {
          method: "GET",
        },
      );
      if (response.status === 200) {
        setCategories(response.data.data);
      } else {
        alert("something went wrong");
      }
    } catch (error) {
      console.log("Error occured at fetchCategories", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <IndexAdmin>
      <CategoryTable categories={categories} />
    </IndexAdmin>
  );
};

export default Categories;
