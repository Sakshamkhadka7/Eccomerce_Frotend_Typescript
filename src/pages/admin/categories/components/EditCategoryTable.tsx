import { useLocation } from "react-router-dom"

const EditCategoryTable = () => {
 
    const {state}=useLocation();
    console.log(state);


  return (
    <div>EditCategoryTable</div>
  )
}

export default EditCategoryTable