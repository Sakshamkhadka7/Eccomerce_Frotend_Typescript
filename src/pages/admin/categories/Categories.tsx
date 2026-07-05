import { useEffect, useState } from "react";
import IndexAdmin from "../IndexAdmin";
import CategoryTable from "./components/CategoryTable";
import axios from "axios";

interface ICategory {
  cartId: string;
  quantity: number;
}

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/cart/getcart");
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
