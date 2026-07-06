import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hook";
import IndexAdmin from "../IndexAdmin";
import { adminSingleFetchProduct } from "../../../store/adminProductSlice";
import { useParams } from "react-router-dom";

const ProductDescription = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();
   
  const {product}=useAppSelector((store)=> store.adminProducts)

  useEffect(() => {
    if (id) {
      dispatch(adminSingleFetchProduct(id));
    }
  }, []);

  console.log(product);

  return (
    <IndexAdmin>
      <h1>Product descriptions</h1>
    </IndexAdmin>
  );
};

export default ProductDescription;
