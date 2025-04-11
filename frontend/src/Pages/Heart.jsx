import React, { useContext, useState } from "react";
import { SectionHeaders, Title } from "../Components";
import { heartLinks, heartPointes } from "../Constants/Index";
import { Button } from "../Components";

const SocialLinks = ({ link, icon, name }) => {
	return (
		<section className="flex justify-center items-center">
			<a
				className="group flex justify-center p-2 border bg-accent hover:translate-y-3 rounded-[50%] transition-all duration-300 ease-custom"
				href={link}
			>
				{icon}
				<span className="absolute opacity-0 group-hover:opacity-100 group-hover:  group-hover:text-sm group-hover:-translate-y-10 duration-300 ease-custom">
					{name}
				</span>
			</a>
		</section>
	);
};

function Heart() {
	const [isLogin, setIsLogin] = useState(true);
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState("");

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			// Here you would typically call your backend API to send the email
			// For example:
			// const response = await fetch('/api/contact', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify(formData)
			// });

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			setSubmitMessage("Thank you! Your message has been sent.");
			setFormData({ name: "", email: "", message: "" });

			setTimeout(() => {
				setSubmitMessage("");
			}, 3000);
		} catch (error) {
			setSubmitMessage(
				"Failed to send message. Please try again later."
			);
		} finally {
			setIsSubmitting(false);
		}
	};
	return (
		<section>
			<div>
				<Title
					Title={"Heārt."}
					SubTitle={
						"Guided by Yūgen, Grounded in Vedana. A mindful fusion of Japanese serenity and Sanskrit self-awareness."
					}
				/>
				<p className="font-inf   sm:text-center text-justify ">
					Vedayū began as a solo developer’s quest to understand
					the quiet links between habits and emotions. Unlike
					aggressive productivity apps, we embrace the spaces
					between—where subtle moods whisper truths. No
					algorithms, no guilt. Just you and your patterns.
				</p>
			</div>

			<div>
				<SectionHeaders sectionHead={"The Story"} />
				{heartPointes.map((point, idx) => (
					<ul
						className="list-none flex flex-col justify-center sm:items-center text-left"
						key={idx}
					>
						<li className="  font-black pt-5">
							{point.title}
						</li>
						<li className=" ">{point.description}</li>
					</ul>
				))}
			</div>

			<div>
				<SectionHeaders sectionHead={"Contact Us"} />
				<div className="flex justify-center space-x-4 py-5">
					{heartLinks.map((item, idx) => (
						<SocialLinks
							key={idx}
							icon={item.icon}
							name={item.name}
							link={item.link}
						/>
					))}
				</div>
			</div>

			<div className="flex flex-col md:flex-row items-center justify-center relative rounded-3xl drop-shadow-2xl pt-5 pb-10">
				{/* Form - now full width on mobile, positioned normally */}
				<form
					onSubmit={handleSubmit}
					className="flex flex-col items-center justify-center gap-5 bg-tertiary   p-6 md:px-10 w-full md:w-[550px] h-auto md:h-[450px] rounded-3xl md:absolute md:left-28 md:z-10"
				>
					<div className="text-center">
						<h2 className="text-xl font-bold font-inf">
							Silence is golden, but feedback is too.
						</h2>
						<h3 className="text-lg md:text-xl font-medium">
							Report bugs, suggest features, or just say
							‘ah, so this is Vedayū’.
						</h3>
					</div>

					<input
						type="text"
						name="name"
						placeholder="Name"
						value={formData.name}
						onChange={handleChange}
						className="w-full h-10 border-b-2 border-primary px-4 outline-none focus:border-accent transition-all duration-500 ease-custom"
						required
					/>

					<input
						type="email"
						name="email"
						placeholder="Email"
						value={formData.email}
						onChange={handleChange}
						className="w-full h-10 border-b-2 border-primary px-4 outline-none focus:border-accent transition-all duration-500 ease-custom"
						required
					/>

					<textarea
						name="message"
						placeholder="Enter Your Message"
						value={formData.message}
						onChange={handleChange}
						rows="3"
						className="w-full resize-none border-b-2 border-primary px-4 pt-1 pb-2 outline-none focus:border-accent transition-all duration-500 ease-custom placeholder:absolute placeholder:bottom-1 "
						required
					/>

					<div className="mt-5">
						<Button
							type="submit"
							buttonText={"Send into the Void →"}
							className="w-full md:w-auto"
						/>
					</div>
				</form>

				<div>
					<span className="hidden md:block w-[550px] h-[450px] rounded-e-3xl ml-130 bg-primary/30 absolute z-1"></span>
					<img
						src="https://images.pexels.com/photos/31541186/pexels-photo-31541186/free-photo-of-serene-view-of-varanasi-s-jain-temple-at-daytime.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
						alt=""
						className="hidden md:block w-[550px] h-[450px] rounded-e-3xl ml-130 object-cover"
					/>
				</div>
			</div>
		</section>
	);
}

export default Heart;
