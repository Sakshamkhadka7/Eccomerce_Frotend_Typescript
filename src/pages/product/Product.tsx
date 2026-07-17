import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hook";
import { fetchProduct } from "../../store/productSlice";
import Card from "./components/Card";
import type { IProduct } from "./types/productType";

const Product = () => {
   
  const [categoriesProducts,setCategoriesProducts]=useState<IProduct[]>([]);

  const dispatch=useAppDispatch();

  const {products}=useAppSelector((store)=> store.products)

  
  
  
  useEffect(()=>{
    dispatch(fetchProduct())
  },[])

  const filterProducts=(categories="Jhumka")=>{
   const items=products.filter((item)=> item.Category.categoryName ===categories);
   setCategoriesProducts(items) 
  }

  useEffect(()=>{
    if(products.length > 0){
       filterProducts()
    }
  },[products])

  console.log("Filter categories products : ",categoriesProducts);


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
