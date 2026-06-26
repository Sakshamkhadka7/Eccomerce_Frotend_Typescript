export interface User{
    name:string,
    age:number
}

interface ProductInfo{
    productName:string,
    quantity:number
}

export interface Product{
    products:[] | ProductInfo[]
}