import React from 'react';
import Cart from './cart/Cart';

const Home = () => {
	return (
		<div>
			 <div
      className="bg-cover mt-10"
      style={{
        backgroundImage: `url("https://i.ibb.co/BqRdzd8/girl-creative-fire-cook-wallpaper-preview.jpg")`,
      }}
    >
      <h2 className="text-5xl text-white text-bold text-center p-16 leading-relaxed">
        You Need Determination <br /> To Prevent Food <br />
        Contamination.
      </h2>
      <p className="text-black font-semibold text-center text-2xl leading-relaxed p-10 pb-28">
        Food is one of the basic necessities of life. <br />
        Food contains nutrients—substances essential for the growth, repair,{" "}
        <br />
        and maintenance of body tissues and for the regulation of vital
        processes.
        <br /> Nutrients provide the energy our bodies need to function.The
        energy in food is measured in units called calories.
      </p>
    </div>
			<Cart></Cart>
		</div>
	);
};

export default Home;