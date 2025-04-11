import React from "react";

function Title({ Title, SubTitle }) {
	return (
		<div className="  text-center pb-10">
			<h1 className="font-inf text-6xl font-bold">{Title}.</h1>
			<p className="text-xl font-medium pt-3">{SubTitle}</p>
		</div>
	);
}

export default Title;
