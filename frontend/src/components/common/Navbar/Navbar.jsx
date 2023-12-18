import React, { useState } from "react";
import Brand from "./components/Brand";
import Links from "./components/Links";
import Profile from "./components/Profile";
import MenuIcon from "./components/MenuIcon";
import SignInButton from "./components/SignInButton";

const Navbar = ({ user }) => {
	const [open, setOpen] = useState(false);
	const trigger = () => {
		setOpen(!open);
	};
	return (
		<div className="bg-purple-400 w-full z-50 shadow-lg">
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
				{user ? <Profile /> : <SignInButton />}
			</div>
		</div>
	);
};

export default Navbar;
