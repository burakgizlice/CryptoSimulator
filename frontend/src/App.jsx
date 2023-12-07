import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import { Landing, Redirecting, UserAssets, UserProfitLoss, UserSettings, UserTransactions, Coins } from "./components/pages/Pages";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Landing />}
				/>
				<Route
					path="/coin-list"
					element={<Coins />}
				/>
				<Route
					path="*"
					element={<Redirecting />}
				/>
				<Route
					path="/my-assets"
					element={<UserAssets />}
				/>
				<Route
					path="/my-profit-and-loss"
					element={<UserProfitLoss />}
				/>
				<Route
					path="/my-settings"
					element={<UserSettings />}
				/>
				<Route
					path="/my-transaction-history"
					element={<UserTransactions />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
