import React from "react";

function Button({ buttonText, onClick, disabled = false }) {
	return (
		<button
			className={`px-7 h-10 bg-accent border-2 border-primary rounded-full cursor-pointer transition-all duration-500 ease-in-btn
        ${
			disabled
				? "opacity-50 cursor-not-allowed"
				: "hover:bg-accent/80 hover:scale-90 "
		}`}
			onClick={onClick}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
}

export default Button;
