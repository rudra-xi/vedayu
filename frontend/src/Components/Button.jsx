import React from "react";

function Button({ buttonText, onClick, disabled = false }) {
	return (
		<button
			className={`px-7 h-10 bg-accent border-2 border-primary dark:border-tertiary dark:text-primary rounded-full cursor-pointer transition-all duration-300 ease-custom ${
				disabled
					? "opacity-50 cursor-not-allowed"
					: "hover:scale-95 "
			}`}
			onClick={onClick}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
}

export default Button;
