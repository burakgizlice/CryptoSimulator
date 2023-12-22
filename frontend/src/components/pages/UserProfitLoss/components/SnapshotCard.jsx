import React, { useEffect } from "react";

const SnapshotCard = ({ balance, assets, worth }) => {
	return (
		<div className="w-full py-3 px-5 border shadow-md max-w-xl rounded-md">
			<div className="border-b py-1">
				<h1 className="font-semibold text-xl">Total Worth</h1>
				<span className="font-semibold">${worth}</span>
			</div>
			<div className="border-b py-1">
				<h1 className="font-semibold text-xl">Balance</h1>
				<span className="font-semibold">${balance}</span>
			</div>
			<div className="border-b py-1">
				<h1 className="font-semibold text-xl">Total Asset Worth</h1>
				<span className="font-semibold">${worth - balance}</span>
			</div>
			<div className="border-b py-1">
				<h1 className="font-semibold text-xl">Total Profit&Loss</h1>
				<div className="flex items-center gap-3">
					<span className="py-1 px-4 my-1 bg-green-400 text-white font-semibold rounded-md">3%</span>
					<span className="py-1 px-4 my-1 bg-green-400 text-white font-semibold rounded-md">+$100</span>
				</div>
			</div>
			<div className="border-b py-1">
				<h1 className="font-semibold text-xl">Weekly Profit&Loss</h1>
				<div className="flex items-center gap-3">
					<span className="py-1 px-4 my-1 bg-red-500 text-white font-semibold rounded-md">-24%</span>
					<span className="py-1 px-4 my-1 bg-red-500 text-white font-semibold rounded-md">-$320</span>
				</div>
			</div>
			<div className="grid grid-cols-8 gap-3 max-w-full pt-5">
				{assets?.map((item, index) => (
					<img
						src={item.coin.image}
						key={index}
						className="aspect-square object-cover w-3000"></img>
				))}
			</div>
		</div>
	);
};

export default SnapshotCard;
