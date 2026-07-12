import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchProduct } from "../../store/productSlice";
import Card from "./components/Card";

const Product = () => {
  
  
  const dispatch=useAppDispatch();

  const {products}=useAppSelector((store)=> store.products)

  
  
  
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  const filterProducts=


  return (
    <div>
      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"
      > 
    


      {
        products?.length > 0 && products.map((pro)=>{
          return (
           <Card product={pro} key={pro.productId} />
          )
        })
      }

        
      </section>
    </div>
  );
};

export default Product;
