import React from "react";
import { Link } from "react-router-dom";

const SignInButton = () => {
	return (
		<Link
			to={"/user-sign-in"}
			className="bg-white whitespace-nowrap my-4 px-4 py-1 rounded-md shadow-sm font-bold cursor-pointer hover:bg-purple-400 hover:text-white border-[2px] border-white hover:border-white hover:scale-110 transition-all">
			Sign In
		</Link>
	);
};

export default SignInButton;
