import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();

function AppContextProvider({ children }) {
	const navigate = useNavigate();
	const [isLoggedIn, setIsLoggedIn] = useState(true); //false
	const [user, setUser] = useState(null);
	const [theme, setTheme] = useState(() => {
		// Get theme from localStorage if it exists, default to light theme
		const savedTheme = localStorage.getItem("theme");
		return savedTheme === "dark" ? "dark" : "";
	});

	// Save theme to localStorage whenever it changes
	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "dark" ? "" : "dark"));
	};

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
		theme,
		setTheme,
		toggleTheme,
	};

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
