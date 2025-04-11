import React, { useState, useContext } from "react";
import { Button, Title } from "../Components";
import { AppContext } from "../Context/AppContext";

function Login() {
	const { login, signup, navigate } = useContext(AppContext);
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (isLogin) {
			login({ email: formData.email });
		} else {
			signup({ name: formData.name, email: formData.email });
		}
	};

	return (
		<section className="pb-12">
			<Title Title={isLogin ? "Lōgin" : "Siḡn Up"} />

			<div className="flex flex-col md:flex-row items-center justify-center relative rounded-3xl drop-shadow-2xl">
				{/* Form - now full width on mobile, positioned normally */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-center justify-center gap-5 bg-tertiary text-primary p-6 md:px-10 w-full md:w-[550px] h-auto md:h-[450px] rounded-3xl md:absolute md:left-28 md:z-10"
				>
					<div className="text-center">
						<h2 className="text-xl font-bold font-inf">
							{isLogin
								? "Welcome back to your calm."
								: "Your self-awareness starts here."}
						</h2>
						<h3 className="text-lg md:text-xl font-medium">
							{isLogin
								? "Sign in to continue your Vedayū journey."
								: "We only ask for what's essential—no fluff."}
						</h3>
					</div>

					{!isLogin && (
						<input
							type="text"
							name="name"
							placeholder="Name"
							value={formData.name}
							onChange={handleChange}
							className="w-full h-10 border-b-2 border-primary px-4 outline-none focus:border-accent transition-all duration-500 ease-custom"
							required
						/>
					)}

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						className="w-full h-10 border-b-2 border-primary px-4 outline-none focus:border-accent transition-all duration-500 ease-custom"
						required
					/>

					<input
						type="password"
						name="password"
						placeholder="Password"
						value={formData.password}
						onChange={handleChange}
						className="w-full h-10 border-b-2 border-primary px-4 outline-none focus:border-accent transition-all duration-500 ease-custom"
						required
						minLength="6"
					/>

					<div className="text-sm w-full text-primary/70 text-right">
						<button
							type="button"
							onClick={() => setIsLogin(!isLogin)}
							className="hover:underline text-left md:text-right cursor-pointer"
						>
							{isLogin
								? "New here? Sign Up to begin."
								: "Already have an account? Login"}
						</button>
					</div>

					<Button
						type="submit"
						buttonText={isLogin ? "Login" : "Sign Up"}
						className="w-full md:w-auto"
					/>
				</form>

				{/* Images - hidden on mobile, shown on medium screens and up */}
				{isLogin ? (
					<div>
						<span className="hidden md:block w-[550px] h-[450px] rounded-e-3xl ml-130 bg-primary/30 absolute z-1"></span>
						<img
							src="https://images.pexels.com/photos/1051449/pexels-photo-1051449.jpeg"
							alt=""
							className="hidden md:block w-[550px] h-[450px] rounded-e-3xl ml-130 object-cover"
						/>
					</div>
				) : (
					<div>
						<span className="hidden md:block w-[550px] h-[450px] rounded-e-3xl ml-130 bg-primary/30 absolute z-1"></span>
						<img
							src="https://images.pexels.com/photos/2873473/pexels-photo-2873473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
							alt=""
							className="hidden md:block w-[550px] h-[450px] rounded-e-3xl ml-130 object-cover"
						/>
					</div>
				)}
			</div>
		</section>
	);
}

export default Login;
