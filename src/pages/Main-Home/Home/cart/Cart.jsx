import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      <h1>All Category</h1>
      <div  className="grid grid-cols-3 gap-4 m-10">
        {categories.map((category) => (
          <p key={category.id}>
            <div>
              <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="p-8 h-96 w-96 rounded-t-lg"
                    src={category.chefPicture}
                    alt="product image"
                  />
                </a>
                <div className="px-5 pb-5">
                  <a href="#">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {category.chefName}</h5>
                  </a>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      Experience : {category.yearsOfExperience}
                    </span>
                    <span>
                      Number of recipes : {category.numOfRecipes}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">
                      $599
                    </span>
                    <Link
                      to={`/details/${category.id}`}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Add to cart
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
