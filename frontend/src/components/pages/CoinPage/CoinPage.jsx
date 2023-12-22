import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import coins from "../../util/mockCoinData";
import { FaCaretDown, FaCaretUp, FaRegStar, FaStar } from "react-icons/fa";
import BuySell from "./components/BuySell";

const CoinPage = () => {
	const { id } = useParams();
	const [coin, setCoin] = useState({});
	const [active, setActive] = useState(0);
	const [starred, setStarred] = useState(false);
	useEffect(() => {
		coins.forEach((item, index) => {
			if (item.symbol == id) {
				setCoin({ ...item, rank: index + 1 });
			}
		});
	}, []);
	return (
		<div className="my-5 mx-auto w-[95%] flex flex-col gap-2">
			{/* Top Part */}
			<span className="py-1 px-3 bg-gray-800 text-white rounded-lg font-semibold w-fit">Rank#{coin?.rank}</span>
			<div className="flex items-center gap-3 py-2">
				<img
					className="w-[40px] aspect-square"
					src={coin?.image}></img>
				<h1 className="text-xl font-bold">{coin?.name}</h1>
				<h3 className="text-gray-400">{coin?.symbol?.toUpperCase()} Price</h3>
			</div>
			<div className="flex items-center gap-2">
				<span className="text-3xl font-bold">${coin?.current_price?.toLocaleString()}</span>
				<div className="flex items-center gap-2">
					<span className={`${coin?.price_change_percentage_24h > 0 ? "text-green-400" : "text-red-500"} font-semibold text-lg`}>{coin?.price_change_percentage_24h?.toFixed(2)}%</span>
					{coin?.price_change_percentage_24h > 0 ? <FaCaretUp className="text-xl text-green-400" /> : <FaCaretDown className="text-xl text-red-500" />}
				</div>
			</div>
			{/* Buy star sell buttons */}
			<div className="flex items-center gap-4">
				<button
					onClick={() => setStarred(!starred)}
					className={`h-10 flex items-center justify-center py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 3 ? "bg-purple-200" : "bg-gray-200"}`}>
					<FaRegStar className={`${starred ? "hidden" : "block"} text-yellow-500 text-xl`} />
					<FaStar className={`${starred ? "block" : "hidden"} text-yellow-500 text-xl`} />
				</button>
				<button
					onClick={() => setActive(0)}
					className={`h-10 flex items-center justify-center py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 0 ? "bg-purple-200" : "bg-gray-200"}`}>
					Buy
				</button>
				<button
					onClick={() => setActive(1)}
					className={`h-10 flex items-center justify-center py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 1 ? "bg-purple-200" : "bg-gray-200"}`}>
					Sell
				</button>
			</div>
			{/* Infos */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				<ul>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">Market Cap</span>
						<span className="font-semibold text-sm">${coins[0].market_cap?.toLocaleString()}</span>
					</li>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">Volume</span>
						<span className="font-semibold text-sm">${coins[0].total_volume?.toLocaleString()}</span>
					</li>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">1h Change</span>
						<span className="font-semibold text-sm">{coins[0].price_change_percentage_1h_in_currency?.toFixed(2)}%</span>
					</li>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">24h Change</span>
						<span className="font-semibold text-sm">{coins[0].price_change_percentage_24h_in_currency?.toFixed(2)}%</span>
					</li>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">7d Change</span>
						<span className="font-semibold text-sm">{coins[0].price_change_percentage_7d_in_currency?.toFixed(2)}%</span>
					</li>
				</ul>
				<ul>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">24h High</span>
						<span className="font-semibold text-sm">${coins[0].high_24h?.toLocaleString()}</span>
					</li>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">24h Low</span>
						<span className="font-semibold text-sm">${coins[0].low_24h?.toLocaleString()}</span>
					</li>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">Max Supply</span>
						<span className="font-semibold text-sm">{coins[0].max_supply?.toLocaleString()}</span>
					</li>
					<li className="flex items-center justify-between border-b">
						<span className="text-gray-400 text-sm">Circulating Supply</span>
						<span className="font-semibold text-sm">{coins[0].circulating_supply?.toLocaleString()}</span>
					</li>
				</ul>
			</div>
			{/* Buy And Sell */}
			<BuySell
				active={active}
				coin={coin}
			/>
		</div>
	);
};

export default CoinPage;
