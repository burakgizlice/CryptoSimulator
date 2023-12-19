import React, { useState } from "react";
import CoinTable from "./components/CoinTable";

const Coins = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="flex flex-col w-[95%] mx-auto py-5">
			<h1 className="font-bold text-3xl">Cryptocurrency Prices by Market Cap</h1>
			<h3 className="text-lg my-3">You have the option to tradee any coin you want in the market, use your balance wisely. You can reset everything and get to 0 coins and 1000$ in the wallet from your account.</h3>
			<div className="flex gap-4 mt-5">
				<button
					onClick={() => setActive(0)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 0 ? "bg-purple-200" : "bg-gray-200"}`}>
					Cryptocurrencies
				</button>
				<button
					onClick={() => setActive(1)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 1 ? "bg-purple-200" : "bg-gray-200"}`}>
					Your Favorites
				</button>
			</div>
			<CoinTable />
		</div>
	);
};

export default Coins;
