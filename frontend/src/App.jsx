import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard, Heart, Insights, Landing, Profile, Login } from "./Pages";
import { Footer, Navbar } from "./Components";

function App() {
	return (
		<>
			<div className="bg-secondary h-full w-full">
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
