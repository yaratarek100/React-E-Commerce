import axios from "axios";
import React, { useEffect, useState } from "react";
import LaudingScreen from "../laudingScreen/laudingScreen";

export default function RecentProducts() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://ecommerce.routemisr.com/api/v1/products")
      .then((res) => {
        setproducts(res.data.data);
      })
      .catch((res) => {
        console.log(res.data);
      });
  }, []);

  if(products.length==0){
    return <LaudingScreen></LaudingScreen>
  }
  else{

    return (
      <>
    
    
      <div className="flex flex-wrap justify-center mx-auto ">
        {products.map((product) => (
          <div className=" w-1/6 min-w-60 p-7 " key={product.id}>
            <div className="product hover:opacity-60 cursor-pointer transition-all relative group pb-14">
              <div>
              <img
                src={product.imageCover}
                alt={product.title}
                className="w-100"
                ></img>
                </div>
              <h4 className="text-lime-400 ">{product.category.name}</h4>
              <h3 className="font-medium text-lg">
                {product.title.split(" ").slice(0, 2).join(" ")}
              </h3>
              <div className="flex justify-between text-slate-600">
                <span>{product.price}EGP</span>
                <span>
                  <i className="fa-solid fa-star text-yellow-400"></i>
                  {product.ratingsAverage}
                </span>
              </div>
              <button className="btn z-10 hover:text-black bg-[--main-color] text-white p-3 rounded-lg shadow-sm absolute bottom-[-10%] opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:-bottom-3 block mx-auto w-full ">
                Add to cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
}


