import React, { useState } from "react";
import avatar from "../../../assets/avatar.jpg";
import Timeline from "./components/Timeline";

const UserProfitLoss = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="flex flex-col w-[95%] mx-auto py-5 md:items-center">
			{/* Welcomer */}
			<div className="flex items-center gap-3 py-4">
				<img
					className="aspect-square object-cover w-20 rounded-full ring-2 ring-purple-400"
					src={avatar}></img>
				<span className="text-3xl font-bold">John Doe</span>
			</div>
			<h1 className="font-bold text-3xl">Your Profit and Loss Performance</h1>
			<h3 className="text-lg my-3">You can check how much profit or loss you recorded over the span of weeks, months and years.</h3>
			{/* Buttons */}
			<div className="flex gap-4">
				<button
					onClick={() => setActive(0)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 0 ? "bg-purple-200" : "bg-gray-200"}`}>
					Weekly
				</button>
				<button
					onClick={() => setActive(1)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 1 ? "bg-purple-200" : "bg-gray-200"}`}>
					Monthly
				</button>
				<button
					onClick={() => setActive(2)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 2 ? "bg-purple-200" : "bg-gray-200"}`}>
					Yearly
				</button>
			</div>
			<Timeline />
		</div>
	);
};

export default UserProfitLoss;
