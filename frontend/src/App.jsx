import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard, Heart, Insights, Landing, Profile, Login } from "./Pages";
import { Footer, Navbar } from "./Components";
import { AppContext } from "./Context/AppContext";

function App() {
	const { theme} = useContext(AppContext);
	return (
		<>
			<div
				className={`${
					theme === "dark" ? "dark" : ""
				} bg-secondary text-primary dark:bg-primary dark:text-tertiary h-full w-full`}
			>
				<Navbar />
				<div className="sm:px-30 px-10 pt-24">
					<Routes>
						<Route path="/" element={<Landing />} />
						<Route path="/login" element={<Login />} />
						<Route
							path="/dashboard"
							element={<Dashboard />}
						/>
						<Route path="/insight" element={<Insights />} />
						<Route path="/profile" element={<Profile />} />
						<Route path="/heart" element={<Heart />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</>
	);
}

export default App;
