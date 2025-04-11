import React, { useContext } from "react";
import { Button, SectionHeaders, Title } from "../Components";
import { AppContext } from "../Context/AppContext";
import { features } from "../Constants/Index";

const LandingCard = ({ icon, title, description }) => {
	return (
		<div className="bg-accent border-3 border-primary w-65 h-70 rounded-3xl hover:-translate-y-3 duration-500 ease-in-card">
			<span className="flex justify-center items-center h-15 w-15 mx-auto mt-5">
				{icon}
			</span>
			<h2 className="text-center py-5 text-2xl text-primary font-black">
				{title}
			</h2>
			<p className="text-center font-inf italic font-bold text-lg">
				{description}
			</p>
		</div>
	);
};

function Landing() {
	const { navigate } = useContext(AppContext);
	return (
		<section className="pb-12">
			<Title
				Title={"Vedayū"}
				SubTitle={"See the hidden patterns in your moods."}
			/>

			<p className="text-primary text-center text-base font-medium">
				A mindful tracker blending Japanese serenity (幽玄) and
				Sanskrit self-awareness (वेदना).
			</p>

			<div className="flex items-center justify-center py-8">
				<Button
					className="self-center"
					buttonText={"Start Your Journey →"}
					onClick={() => navigate("/login")}
				/>
			</div>

			<p className="text-primary sm:text-center text-justify text-lg font-medium px-4">
				<span className="font-inf font-bold">Vedayū</span> is a
				mood-habit tracker inspired by the Sanskrit concept of
				self-awareness{" "}
				<span className="font-inf font-bold">(Vedana)</span> and the
				Japanese aesthetic of subtle beauty{" "}
				<span className="font-inf font-bold">(Yūgen)</span>. It
				helps users uncover the quiet connections between daily
				habits and emotional states.
			</p>

			<div>
				<SectionHeaders sectionHead={"What Sets Us Apart"} />
			</div>

			<div className=" flex sm:gap-10 gap-2 justify-center items-center flex-wrap py-10">
				{features.map((feature, index) => (
					<LandingCard
						key={index}
						icon={feature.icon}
						title={feature.title}
						description={feature.description}
					/>
				))}
			</div>
		</section>
	);
}

export default Landing;
