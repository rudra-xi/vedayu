import React from "react";

function Button({ buttonText, onClick, disabled = false }) {
	return (
		<button
			className={`px-7 h-10 bg-accent border-2 border-tertiary rounded-full cursor-pointer
        ${disabled ? "opacity-50 cursor-not-allowed" : "hover:bg-accent/20"}
        transition-colors duration-200`}
			onClick={onClick}
			disabled={disabled}
		>
			{buttonText}
		</button>
	);
}

export default Button;
