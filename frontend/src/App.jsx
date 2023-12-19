import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";
import { Landing, Redirecting, UserAssets, UserProfitLoss, UserSettings, UserTransactions, Coins } from "./components/pages/Pages";
import UserSignIn from "./components/pages/UserSignIn/UserSignIn";
import CoinPage from "./components/pages/CoinPage/CoinPage";

const App = () => {
	// ========== MOCK AUTH LOGIC
	const [user, setUser] = useState(null);
	return (
		<BrowserRouter>
			<Navbar user={user} />
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
					path="/coin/:id"
					element={<CoinPage />}
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
				<Route
					path="/user-sign-in"
					element={<UserSignIn setUser={(a) => setUser(a)} />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
};

export default App;
