import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import coins from "../../../util/mockCoinData";
import transactions from "../../../util/mockTransactionData";

const TransactionTable = () => {
	const nav = useNavigate();
	const [orderBy, setOrderBy] = useState("#1");

	const handleSortClick = (content) => {
		if (orderBy === `${content}1`) {
			setOrderBy(`${content}2`);
		} else {
			setOrderBy(`${content}1`);
		}
	};

	const headers = [
		{
			content: "Id",
			width: 50,
		},
		{
			content: "Coin",
			width: 200,
		},
		{
			content: "Type",
			width: 100,
		},
		{
			content: "Amount",
			width: 100,
		},
		{
			content: "Coin Price",
			width: 150,
		},
		{
			content: "Total Price",
			width: 150,
		},
		{
			content: "Date&Time",
			width: 220,
		},
		{
			content: "Profit&Loss",
			width: 100,
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
								</div>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{transactions.map((transaction, index) => (
						<tr
							key={index}
							className={`${index % 2 == 0 ? "bg-white" : "bg-purple-50"} hover:bg-gray-100 cursor-pointer`}>
							<td className="py-6">
								<span>{transaction.id}</span>
							</td>
							<td className="py-6">
								<div className="flex items-center gap-3">
									<img
										className="aspect-square object-cover w-9"
										src={transaction.coin.image}></img>
									<span className="font-semibold">{transaction.coin.name}</span>
									<span className="text-gray-400">{transaction.coin.symbol.toUpperCase()}</span>
								</div>
							</td>
							<td className="py-6">
								<span className={`${transaction.type == "BUY" ? "text-green-400" : "text-red-500"} font-semibold`}>{transaction.type}</span>
							</td>
							<td className="py-6">
								<span className="text-center">{transaction.amount}</span>
							</td>
							<td className="py-6">
								<span>${transaction.coin.current_price.toLocaleString()}</span>
							</td>
							<td className="py-6">
								<span>${(transaction.coin.current_price * transaction.amount).toLocaleString()}</span>
							</td>
							<td className="py-6">
								<span>{transaction.dateTime}</span>
							</td>
							<td className="py-6">
								<span className={`${transaction.profitLoss > 0 ? "text-green-400" : "text-red-500"} font-semibold`}>{transaction.profitLoss}%</span>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default TransactionTable;
