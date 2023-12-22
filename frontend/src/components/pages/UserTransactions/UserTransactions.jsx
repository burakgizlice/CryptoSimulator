import React, { useState } from "react";
import TransactionTable from "./components/TransactionTable";

const UserTransactions = () => {
	const [active, setActive] = useState(0);
	return (
		<div className="flex flex-col w-[95%] mx-auto py-5">
			<h1 className="font-bold text-3xl">Your Transaction History</h1>
			<h3 className="text-lg my-3">You can analyze your past transactions and see what you did in details.</h3>
			<div className="flex gap-4 mt-5">
				<button
					onClick={() => setActive(0)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 0 ? "bg-purple-200" : "bg-gray-200"}`}>
					All Actions
				</button>
				<button
					onClick={() => setActive(1)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 1 ? "bg-purple-200" : "bg-gray-200"}`}>
					Buy Actions
				</button>
				<button
					onClick={() => setActive(2)}
					className={`py-2 px-6 hover:bg-purple-100 transition-all  rounded-lg font-semibold ${active == 2 ? "bg-purple-200" : "bg-gray-200"}`}>
					Sell Actions
				</button>
			</div>
			<TransactionTable />
		</div>
	);
};

export default UserTransactions;
