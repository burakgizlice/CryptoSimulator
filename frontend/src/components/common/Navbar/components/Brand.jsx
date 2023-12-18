import React from "react";
import { Link } from "react-router-dom";
import { GiTwoCoins } from "react-icons/gi";

const Brand = () => {
	return (
		<Link
			to={"/"}
			className="flex gap-2 items-center w-fit">
			<GiTwoCoins className="text-6xl text-white" />
			<h1 className="text-3xl font-extrabold whitespace-nowrap text-white">Crypto Simulator</h1>
		</Link>
	);
};

export default Brand;
