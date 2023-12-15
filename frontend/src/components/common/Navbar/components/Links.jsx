import React from "react";
import navPageList from "../../../util/navPageList";
import { Link } from "react-router-dom";

const Links = ({ open, close }) => {
	return (
		<ul className={`absolute left-0 ${!open ? "top-[-999px]" : "top-[5.52rem]"} flex flex-col items-center gap-1 w-full bg-teal-400 ${open} transition-all duration-300 ease-in-out md:static md:flex md:flex-row md:items-center md:justify-around md:w-full z-10 md:z-0`}>
			{navPageList.map((item, index) => (
				<Link
					onClick={() => close()}
					className="text-2xl border-2 md:border-none py-5 w-full md:text-base text-white hover:scale-105 transition-all font-bold text-center"
					key={index}
					to={item.path}>
					{item.name}
				</Link>
			))}
		</ul>
	);
};

export default Links;
