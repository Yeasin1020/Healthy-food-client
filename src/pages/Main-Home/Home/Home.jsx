import React, { useEffect } from "react";
import Cart from "./cart/Cart";
import Team from "./team/Team";
import Section from "./section/Section";
import AOS from 'aos';
import 'aos/dist/aos.css';
import useTitle from "../../../hocks/useTitle";

const Home = () => {
  
  useTitle('Home')

  return (
    <div>
      <div className="m-7">
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url("https://i.ibb.co/sCGhLS3/step5-870x1300.jpg")`,
          }}
        >
          <h2 className="text-5xl text-white font-extrabold text-center lg:p-16 leading-relaxed">
            Nourishing Foods to Keep You Feeling Great
          </h2>
          <p className=" text-black text-3xl font-semibold text-center  leading-relaxed p-10 pb-28">
            Eating a nourishing diet is important for maintaining good health
            and well-being. By choosing healthy foods that are packed with
            nutrients, you can help support your body's immune system, boost
            energy levels, and improve overall mood.
          </p>
        </div>
        <Cart></Cart>
        <Team></Team>
        <Section></Section>
      </div>
    </div>
  );
};

export default Home;
