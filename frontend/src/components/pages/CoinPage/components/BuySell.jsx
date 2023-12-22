import React, { useState } from "react";
import coins from "../../../util/mockCoinData";
import { FaWallet } from "react-icons/fa";
import { GiTwoCoins } from "react-icons/gi";

const BuySell = ({ coin, active }) => {
	const [inWallet, setInWallet] = useState(5.54);
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-5">
			{/* in wallet info */}
			<div className="flex flex-col shadow-md p-5 rounded-lg border h-fit">
				<h1 className="font-bold text-xl">IN WALLET</h1>
				<div className="flex items-center gap-1">
					<span className="font-semibold">{inWallet.toFixed(6)}</span>
					<span className="text-gray-400">{coin?.symbol?.toUpperCase()}s</span>
				</div>
				<span className="text-xs text-gray-500">(Worth: {(inWallet * coin?.current_price)?.toLocaleString()} USDs)</span>
			</div>
			{/* inputs */}
			<div className="flex flex-col gap-5 justify-between shadow-md p-5 rounded-lg border">
				<div>
					<div className="flex items-center justify-between">
						<span className="text-sm text-black font-semibold">At Price</span>
						<span className="text-sm text-gray-500">USD</span>
					</div>
					<input
						placeholder={coin?.current_price?.toLocaleString()}
						className="px-3 py-2 text-md font-bold border-[2px] w-full rounded-md"
						readOnly></input>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<span className="text-sm text-black font-semibold">Amonut</span>
						<span className="text-sm text-gray-500">{coin?.symbol?.toUpperCase()}</span>
					</div>
					<input className="px-3 py-2 text-md font-bold border-[2px] w-full rounded-md"></input>
				</div>
				<div>
					<div className="flex items-center justify-between">
						<span className="text-sm text-black font-semibold">Total</span>
						<span className="text-sm text-gray-500">USD</span>
					</div>
					<input className="px-3 py-2 text-md font-bold border-[2px] w-full rounded-md"></input>
				</div>
				{active == 0 ? (
					<div className="flex items-center justify-between mt-1">
						<div className="flex items-center gap-3 text-md text-white bg-purple-400 py-1 px-3 rounded-md font-bold">
							<FaWallet />
							<span>1000 USDs</span>
						</div>
						<ul className="flex gap-4 text-md">
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">25%</li>
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">50%</li>
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">75%</li>
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">100%</li>
						</ul>
					</div>
				) : (
					<div className="flex items-center justify-between">
						<div className="flex items-center gap-3 text-md text-white bg-purple-400 py-1 px-3 rounded-md font-bold">
							<GiTwoCoins className="text-xl" />
							<span>5.54 {coin?.symbol?.toUpperCase()}s</span>
						</div>
						<ul className="flex gap-4 text-md">
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">25%</li>
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">50%</li>
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">75%</li>
							<li className="bg-gray-300 py-1 px-2 rounded-md text-white font-semibold cursor-pointer hover:bg-gray-400 transition-all">100%</li>
						</ul>
					</div>
				)}

				<button className={`py-3 px-16 text-lg w-fit mx-auto rounded-md font-bolg text-white ${active == 0 ? "bg-green-400" : active == 1 ? "bg-red-500" : ""}`}>{active == 0 ? "Buy" : "Sell"}</button>
			</div>
		</div>
	);
};

export default BuySell;
