import React from "react";
import { useNavigate } from "react-router-dom";

const LogIn = ({ setUser, switchToRegister }) => {
	const nav = useNavigate();
	return (
		<div className="flex flex-col gap-4 items-center">
			<h1 className="text-center font-bold text-3xl text-teal-500">Good to see you again</h1>
			<form
				onSubmit={(e) => {
					setUser("mamiko");
					e.preventDefault();
					nav("/");
				}}
				className="h-full bg-white flex flex-col items-left justify-center py-8 px-10 rounded-md shadow-lg gap-3 w-[300px] md:w-[400px]">
				<>
					<label className="text-teal-500 font-bold px-3">Email</label>
					<input
						placeholder="e.g johndoe@mail.com"
						type="email"
						className="border-[2px] border-teal-500 text-lg rounded-xl py-1 px-3"></input>
				</>
				<>
					<label className="text-teal-500 font-bold px-3">Password</label>
					<input
						placeholder="****************"
						type="password"
						className="border-[2px] border-teal-500 text-lg rounded-xl py-1 px-3"></input>
				</>
				<button
					type="submit"
					className="bg-teal-400 border-[2px] border-teal-500 py-1 px-7 text-white rounded-xl text-xl transition-all cursor-pointer hover:bg-white hover:border-teal-500 hover:text-teal-500">
					Log In
				</button>
			</form>
			<h2
				onClick={() => switchToRegister()}
				className="underline cursor-pointer font-bold text-teal-500 transition-all hover:scale-110">
				Don't have an account? Click to make an account!
			</h2>
		</div>
	);
};

export default LogIn;
