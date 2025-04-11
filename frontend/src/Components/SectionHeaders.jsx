import React from "react";

function SectionHeaders({ sectionHead, sectionText }) {
	return (
		<div className="  text-center pt-10">
			<h1 className="font-inf text-4xl italic font-bold">
				{sectionHead}
			</h1>
			<p className="text-sm font-medium sm:text-center text-justify pt-3">
				{sectionText}
			</p>
		</div>
	);
}

export default SectionHeaders;
