import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaRegThumbsUp } from "react-icons/fa";
import './Cart.css'
import LazyLoad from "react-lazy-load";

const Cart = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://assignment-10-server-yeasin1020.vercel.app/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      
      <div  className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:m-10 ">
        {categories.map((category) => (
          <p key={category.id}>
            <div>
              <div className="w-full max-w-sm hover:bg-slate-200 hover:shadow-2xl bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="#">
                  <LazyLoad threshold={0.95}>
                  <img
                    className="p-8 h-96 w-96 rounded-t-lg"
                    src={category.chefPicture}
                    
                  />
                  </LazyLoad>
                </a>
                <div className="px-5 pb-5">
                  <a>
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {category.chefName}</h5>
                  </a>
                  
                  <div className="flex items-center justify-between mt-2 mb-2">
                    <span className=" font-bold text-gray-900 dark:text-white">
                      Experience : {category.yearsOfExperience} Years
                    </span>
                    <span className=" font-bold text-gray-900 dark:text-white">
                      Number of recipes : {category.numOfRecipes}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl flex font-semibold text-gray-900 dark:text-white">
                      <FaRegThumbsUp className="mr-2 hover:text-green-600"></FaRegThumbsUp>  {category.likes}
                    </span>
                    <Link
                      to={`/details/${category.id}`}
                      className="text-blue-700 bg-blue-100 hover:bg-blue-800 hover:text-white  font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 " >
                      View Recipes
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Cart;
