import React, { useState } from "react";
import coins from "../../../util/mockCoinData";

const BuySell = ({ coin }) => {
	const [inWallet, setInWallet] = useState(5.54);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
			{/* in wallet info */}
			<div className="flex flex-col shadow-md p-5 rounded-lg border">
				<h1 className="font-bold text-xl">IN WALLET</h1>
				<div className="flex items-center gap-1">
					<span className="font-semibold">{inWallet.toFixed(6)}</span>
					<span className="text-gray-400">{coins[0].symbol?.toUpperCase()}s</span>
				</div>
				<span className="text-xs text-gray-500">(Worth: {(inWallet * coins[0].current_price).toLocaleString()} USDs)</span>
			</div>
			{/* inputs */}
			<div className="flex flex-col gap-2 justify-between shadow-md p-5 rounded-lg border">
				<div className="flex gap-2">
					<label className="flex-1 py-1 px-3 bg-gray-800 text-white rounded-md font-semibold text-center">{coins[0].symbol?.toUpperCase()}s</label>
					<input className="border flex-[3] rounded-sm"></input>
					<button className="text-white flex-1 bg-gray-400 rounded-lg font-bold">Max</button>
					<button className="text-white flex-1 bg-green-400 rounded-lg font-bold">Buy</button>
				</div>
				<div className="flex gap-2">
					<label className="flex-1 py-1 px-3 bg-gray-800 text-white rounded-md font-semibold text-center">USDs</label>
					<input className="border flex-[3] rounded-sm"></input>
					<button className="text-white flex-1 bg-gray-400 rounded-lg font-bold">Max</button>
					<button className="text-white flex-1 bg-red-500 rounded-lg font-bold">Buy</button>
				</div>
			</div>
		</div>
	);
};

export default BuySell;
