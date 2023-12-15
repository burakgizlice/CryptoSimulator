import React, { useState } from "react";
import Brand from "./components/Brand";
import Links from "./components/Links";
import Profile from "./components/Profile";
import MenuIcon from "./components/MenuIcon";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const trigger = () => {
		setOpen(!open);
	};
	return (
		<div className="bg-teal-400 w-full z-50">
			{/* Container */}
			<div className="flex items-center justify-between w-[95%] mx-auto py-3 z-10">
				<MenuIcon
					open={open}
					trigger={trigger}
				/>
				<Brand />
				<Links
					open={open}
					close={() => setOpen(false)}
				/>
				<Profile />
			</div>
		</div>
	);
};

export default Navbar;
