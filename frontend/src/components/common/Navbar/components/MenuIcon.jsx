import React from "react";
import { IoMdMenu, IoMdClose } from "react-icons/io";

const MenuIcon = ({ open, trigger }) => {
	return (
		<div
			onClick={() => trigger()}
			className="md:hidden text-3xl text-white cursor-pointer hover:scale-110 transition-all">
			{
				//
				!open ? <IoMdMenu /> : <IoMdClose />
			}
		</div>
	);
};

export default MenuIcon;
