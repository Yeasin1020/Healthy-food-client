import { Card } from "flowbite-react";
import React from "react";

const Section = () => {
  return (
    <div className="lg:m-20">
		<h2 className="text-3xl mb-5 text-center font-bold">Our Restaurant</h2>
      <div className=" hover:shadow-2xl">
        <Card className="w-[100%]"
          horizontal={true}
          imgSrc="https://i.ibb.co/Gs1PtCQ/blog2.jpg"
        >
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Healthy Foods Restaurant
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
		  Restaurants offer a variety of cuisines and dishes to suit different tastes and preferences. From fast food to fine dining, there is a restaurant for every occasion. Some restaurants are known for their signature dishes, while others focus on using fresh, locally sourced ingredients. Whether you're looking for a quick bite or a full-course meal, a restaurant is the perfect place to satisfy your hunger and indulge in delicious food.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Section;
