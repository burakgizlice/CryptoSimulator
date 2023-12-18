import React, { useState } from "react";
import LogIn from "./components/LogIn";
import Register from "./components/Register";

const UserSignIn = ({ setUser }) => {
	const [logIn, setLogIn] = useState(true);
	return (
		<div className="bg-purple-100 min-h-[75vh] flex items-center justify-center">
			{logIn ? (
				<LogIn
					setUser={setUser}
					switchToRegister={() => setLogIn(false)}
				/>
			) : (
				<Register
					setUser={setUser}
					switchToLogIn={() => setLogIn(true)}
				/>
			)}
		</div>
	);
};

export default UserSignIn;
