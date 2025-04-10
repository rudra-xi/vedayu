import React from "react";
import { logoLight } from "../Assets";

function Footer() {
	return (
		<footer className="border-t-2 sm:px-10 px-4 py-2">
			<div className="flex sm:flex-row flex-col sm:justify-between sm:items-center w-full text-primary">
				<div className="flex gap-5 items-center sm:-mt-16">
					<img src={logoLight} alt="" className="w-14" />
					<h3 className="sm:text-6xl text-4xl font-inf font-black">
						Vedayū.
					</h3>
				</div>
				<div className="flex flex-col gap-2 mt-5">
					<h4 className="sm:text-6xl text-4xl font-inf font-black">
						Harmōny with Vedayū.
					</h4>
					<p className="sm:w-[500px] text-[14px] sm:ml-10 ml-0">
						Discover the quiet beauty of your habits and
						emotions with Vedayū. Unveil subtle patterns,
						embrace mindfulness, and find harmony in daily
						life. Let me know if you'd like adjustments!
					</p>
				</div>
			</div>

			<div className="flex gap-15 sm:-mt-16 mt-0 ml-0 sm:ml-19 text-primary ">
				<div className="flex flex-col gap-0.5 mt-5">
					<a
						href="https://github.com/rudra-xi"
						target="_blank"
						rel="noopener noreferrer"
					>
						Github
					</a>
					<a
						href="https://www.linkedin.com/in/goutam-rudraxi/"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
					<a
						href="https://www.instagram.com/rudra.xii/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Instagram
					</a>
				</div>

				<div className="mt-5 text-primary ">
					<a
						href="https://rudra-xi-protfolio.netlify.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Portfolio
					</a>
				</div>
				<div className="mt-5 text-primary ">
					<a href="/heart">Heart Us</a>
				</div>
			</div>
			<div className="flex justify-center items-center mt-5">
				<p className="text-[12px] text-primary">
					Built with ♡ by Rudra-Xi. © 2025 Rudra-Xi. All rights
					reserved.
				</p>
			</div>
		</footer>
	);
}

export default Footer;
