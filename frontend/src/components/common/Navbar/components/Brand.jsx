import React from "react";
import { Link } from "react-router-dom";

const Brand = () => {
	return (
		<Link to={"/"}>
			<h1 className="text-3xl font-extrabold whitespace-nowrap text-white">Crypto Simulator</h1>
		</Link>
	);
};

export default Brand;
