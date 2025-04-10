import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState(null);

	const login = (userData) => {
		setIsLoggedIn(true);
		setUser(userData);
		navigate("/dashboard"); // or wherever you want to redirect after login
	};

	const logout = () => {
		setIsLoggedIn(false);
		setUser(null);
		navigate("/");
	};

	const signup = (userData) => {
		// Typically you would send this to your backend
		setUser(userData);
		setIsLoggedIn(true);
		navigate("/dashboard");
	};

	const value = {
		isLoggedIn,
		user,
		login,
		logout,
		signup,
		navigate,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
