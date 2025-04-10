import React, { useContext } from "react";
import { logoDark, logoLight } from "../Assets";
import Button from "./Button";
import { AppContext } from "../Context/AppContext";

function Navbar() {
	const { isLoggedIn, logout, navigate, theme } = useContext(AppContext);

	return (
		<nav>
			<div className="flex justify-between items-center sm:px-10 px-4 py-2 bg-secondary dark:bg-primary  border-b-2 fixed w-full z-50">
				{theme === "dark" ? (
					<img
						src={logoDark}
						alt="logo"
						className="w-10 cursor-pointer"
						onClick={() =>
							isLoggedIn
								? navigate("/dashboard")
								: navigate("/")
						}
					/>
				) : (
					<img
						src={logoLight}
						alt="logo"
						className="w-10 cursor-pointer"
						onClick={() =>
							isLoggedIn
								? navigate("/dashboard")
								: navigate("/")
						}
					/>
				)}

				{isLoggedIn ? (
					<div>
						<ul className="flex space-x-4">
							<li
								className="cursor-pointer"
								onClick={() => navigate("/dashboard")}
							>
								Dashboard
							</li>
							<li
								className="cursor-pointer"
								onClick={() => navigate("/insight")}
							>
								Insights
							</li>
							<li
								className="cursor-pointer"
								onClick={() => navigate("/profile")}
							>
								Profile
							</li>
						</ul>
					</div>
				) : (
					<div className="flex items-center justify-center">
						<a
							href="/"
							className="font-inf text-4xl font-bold   text-center cursor-pointer"
						>
							Vedayū
						</a>
					</div>
				)}

				<Button
					buttonText={isLoggedIn ? "Logout" : "Login"}
					onClick={
						isLoggedIn ? logout : () => navigate("/login")
					}
				/>
			</div>
		</nav>
	);
}

export default Navbar;
