import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false); // Better naming than "login"

	const value = {
		isLoggedIn,
		login: () => setIsLoggedIn(true),
		logout: () => {
			setIsLoggedIn(false);
			navigate("/");
		},
		navigate,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
