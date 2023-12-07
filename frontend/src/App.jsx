import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar/Navbar";
import Footer from "./components/common/Footer/Footer";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<h1>Main Page</h1>}
				/>
				<Route
					path="/about"
					element={<h1>About Page</h1>}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	</React.StrictMode>
);
