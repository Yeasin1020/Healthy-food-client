import React from "react";
import Cart from "./cart/Cart";
import Team from "./team/Team";

const Home = () => {
  return (
    <div className="m-5">
      <div
        className="bg-cover mt-10"
        style={{
          backgroundImage: `url("https://i.ibb.co/BqRdzd8/girl-creative-fire-cook-wallpaper-preview.jpg")`,
        }}
      >
        <h2 className="text-5xl text-white text-bold text-center p-16 leading-relaxed">
        Nourishing Foods to Keep You Feeling Great
        </h2>
        <p className=" text-gray-300 font-semibold text-center text-2xl leading-relaxed p-10 pb-28">
        Eating a nourishing diet is important for maintaining good health and well-being. By choosing healthy foods that are packed with nutrients, you can help support your body's immune system, boost energy levels, and improve overall mood.
        </p>
      </div>
      <Cart></Cart>
      <Team></Team>
    </div>
  );
};

export default Home;
