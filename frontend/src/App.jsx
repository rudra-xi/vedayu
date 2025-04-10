import React from "react";
import { Routes, Route } from "react-router-dom";

import { Dashboard, Heart, Insights, Landing, Profile, Sign } from "./Pages";
import { Footer, Navbar } from "./Components";

function App() {
	return (
		<>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/sign" element={<Sign />} />
					<Route path="/dashboard" element={<Dashboard />} />
					<Route path="/insight" element={<Insights />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/heart" element={<Heart />} />
				</Routes>
				<Footer />
			</div>
		</>
	);
}

export default App;
