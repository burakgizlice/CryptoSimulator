import React from "react";
import { useNavigate } from "react-router-dom";

const AssetCard = ({ asset }) => {
	const nav = useNavigate();
	// variables
	const coin = asset.coin;
	const inWallet = asset.amount;
	const wAverage = asset.wAverage;
	// Percentage calc
	const diff = asset?.coin?.current_price - asset.wAverage;
	const percentage = (100 * diff) / asset?.coin?.current_price;
	return (
		<div
			onClick={() => nav(`/coin/${coin?.symbol}`)}
			className="flex border justify-between shadow-md py-3 px-5 rounded-md min-w-full hover:shadow-purple-200 hover:shadow-xl transition-all cursor-pointer duration-300">
			{/* COIN INFO */}
			<div className="flex flex-col items-center p-5 w-fit whitespace-nowrap">
				<img
					className="aspect-square w-16"
					src={coin?.image}></img>
				<h1 className="font-semibold text-xl">{coin?.name}</h1>
				<h2 className=" text-lg text-gray-400">{coin?.symbol?.toUpperCase()}</h2>
				<div className="flex flex-col items-center">
					<span className="font-bold">IN WALLET</span>
					<span className="font-semibold text-sm">
						{inWallet?.toLocaleString()} {coin?.symbol?.toUpperCase()}s
					</span>
					<span className="text-xs font-semibold whitespace-nowrap">(Worth: {(coin?.current_price * inWallet).toLocaleString()} USDs)</span>
				</div>
			</div>
			{/* PROFIT AND LOSS UI */}
			<div className="flex flex-col items-center w-full justify-around">
				<div className=" w-full border-b">
					<h1 className="font-semibold text-xl">Current Price</h1>
					<span className="font-semibold">{coin?.current_price?.toLocaleString()} USDs</span>
					<span className={`${diff > 0 ? "text-green-400" : "text-red-500"} mx-2 font-bold`}>
						{diff > 0 ? "+" : "-"}${Math.abs(diff).toLocaleString()}
					</span>
				</div>
				<div className=" w-full border-b">
					<h1 className="font-semibold text-xl">Weighted Average Purchase Price</h1>
					<span className="font-semibold">{wAverage?.toLocaleString()} USDs</span>
				</div>
				<div className="w-full border-b">
					<h1 className="font-semibold text-xl">Profit or Loss If Sold Now</h1>
					<span className={`${percentage > 0 ? "text-green-400" : "text-red-500"} font-bold`}>{percentage?.toFixed(2)}%</span>
				</div>
			</div>
		</div>
	);
};

export default AssetCard;
