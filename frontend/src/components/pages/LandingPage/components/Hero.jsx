import React from "react";
import Bg from "../../../../assets/HeroBg.jpg";
import { GiTwoCoins } from "react-icons/gi";

const Hero = () => {
	return (
		<div
			style={{ backgroundImage: `url(${Bg})` }}
			className="bg-center bg-cover min-h-[650px] z-0 relative flex flex-col items-center justify-around py-20">
			{/* white effect */}
			<div className="absolute top-0 left-0  w-full h-full bg-black opacity-40 -z-50"></div>
			<div className="grid grid-cols-1 md:grid-cols-2 w-full justify-items-center">
				<div className="text-6xl flex flex-col text-white items-center gap-3 w-full">
					<GiTwoCoins className="text-8xl" />
					<h1 className="font-extrabold text-white text-6xl flex items-center max-w-[500px] text-center">Welcome to the Crypto Simulator!</h1>
				</div>
				<h2 className="text-white text-4xl md:w-5/6 p-8 font-bold mt-14">
					Immerse Yourself in the World of Crypto Trading<span className="block text-xl mt-4">Welcome to the Crypto Simulator, a risk-free environment where you can hone your trading skills and explore the exciting dynamics of the cryptocurrency market!</span>
				</h2>
			</div>
			<button className="md:text-5xl text-3xl font-bold bg-purple-500 md:py-4 py-2 md:px-8 px-4 rounded-3xl shadow-md text-white border-[2px] border-white cursor-pointer transition-all hover:bg-purple-400 hover:scale-110">Start Now!</button>
		</div>
	);
};

export default Hero;
