import React, { useEffect, useState } from "react";
import coins from "../../../util/mockCoinData.js";
import { FaCaretDown, FaCaretUp, FaRegStar, FaStar } from "react-icons/fa";
import { Sparklines, SparklinesLine } from "react-sparklines";

const CoinTable = () => {
	const [orderBy, setOrderBy] = useState("#1");
	const [starred, setStarred] = useState({});

	const handleSortClick = (content) => {
		if (orderBy === `${content}1`) {
			setOrderBy(`${content}2`);
		} else {
			setOrderBy(`${content}1`);
		}
	};

	const headers = [
		{
			content: "#",
			width: 50,
		},
		{
			content: "Coin",
			width: 150,
		},
		{
			content: "Price",
			width: 100,
		},
		{
			content: "1h",
			width: 70,
		},
		{
			content: "24h",
			width: 70,
		},
		{
			content: "7d",
			width: 70,
		},
		{
			content: "Volume",
			width: 100,
		},
		{
			content: "Market Cap",
			width: 150,
		},
		{
			content: "Last 7 Days",
			width: 150,
		},
	];

	return (
		<div className="overflow-auto my-5">
			<table className="w-full">
				<thead className="border-t border-b border-gray-200">
					<tr>
						{headers.map((item, index) => (
							<th
								key={index}
								onClick={() => handleSortClick(item.content)}
								className={`p-3 text-sm font-semibold tracking-wide text-left group cursor-pointer`}
								style={{ width: item.width + "px", minWidth: item.width + "px" }}>
								<div className="flex items-center">
									<span>{item.content}</span>
									<FaCaretUp className={`${orderBy == item.content + "1" ? "block" : "hidden"}`} />
									<FaCaretDown className={`${orderBy == item.content + "2" ? "block" : "hidden"} ${orderBy.includes(item.content) ? "" : "group-hover:block"}`} />
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{coins.map((coin, index) => (
						<tr
							key={index}
							className={`${index % 2 == 0 ? "bg-white" : "bg-purple-50"} hover:bg-gray-100 cursor-pointer`}>
							<td className="py-6">
								<div className="flex items-center gap-3">
									<FaRegStar
										className={`${starred[index] ? "hidden" : "block"} text-yellow-500 text-xl m-2`}
										onClick={() => {
											const tmp = { ...starred };
											tmp[index] = 1;
											setStarred(tmp);
										}}
									/>
									<FaStar
										className={`${starred[index] ? "block" : "hidden"} text-yellow-500 text-xl m-2`}
										onClick={() => {
											const tmp = { ...starred };
											tmp[index] = null;
											setStarred(tmp);
										}}
									/>
									<span>{index + 1}</span>
								</div>
							</td>
							<td className="py-6">
								<div className="flex items-center gap-4">
									<img
										className="aspect-square w-[30px]"
										src={coin.image}></img>
									{coin.name} <span className="text-gray-400">{coin.symbol.toUpperCase()}</span>
								</div>
							</td>
							<td className={`py-6`}>{coin.current_price.toLocaleString()} $</td>
							<td className={`py-6 ${coin.price_change_percentage_1h_in_currency > 0 ? "text-green-400" : "text-red-500"}`}>{coin.price_change_percentage_1h_in_currency.toFixed(2)}%</td>
							<td className={`py-6 ${coin.price_change_percentage_24h_in_currency > 0 ? "text-green-400" : "text-red-500"}`}>{coin.price_change_percentage_24h_in_currency.toFixed(2)}%</td>
							<td className={`py-6 ${coin.price_change_percentage_7d_in_currency > 0 ? "text-green-400" : "text-red-500"}`}>{coin.price_change_percentage_7d_in_currency.toFixed(2)}%</td>
							<td className={`py-6`}>{coin.total_volume.toLocaleString()} $</td>
							<td className={`py-6`}>{coin.market_cap.toLocaleString()} $</td>
							<td className={`py-6`}>
								<Sparklines
									data={coin.sparkline_in_7d.price}
									limit={100}
									margin={5}>
									<SparklinesLine color={`${coin.price_change_percentage_7d_in_currency > 0 ? "green" : "red"}`} />
								</Sparklines>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default CoinTable;
