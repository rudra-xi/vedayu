import {
	MdOutlineSupervisorAccount,
	MdOutlineInsights,
	MdDarkMode,
	MdOutlineHistory,
} from "react-icons/md";
import {
	FaGithub,
	FaLinkedin,
	FaInstagram,
	FaUserCircle,
} from "react-icons/fa";

export const features = [
	{
		icon: (
			<MdOutlineSupervisorAccount size={50} className="text-primary" />
		),
		title: "Log with Ease",
		description:
			"Track your moods effortlessly using emojis—simple, not overwhelming.",
	},
	{
		icon: <MdOutlineInsights size={50} className="text-primary" />,
		title: "Hidden Patterns",
		description:
			"See how your daily habits quietly influence your emotional state.",
	},
	{
		icon: <MdDarkMode size={50} className="text-primary" />,
		title: "Reflect Anytime",
		description: "Embrace nighttime serenity with a soothing dark mode.",
	},
	{
		icon: <MdOutlineHistory size={50} className="text-primary" />,
		title: "Track Progress",
		description:
			"Review your emotional journey over time with insightful analytics.",
	},
];

export const heartPointes = [
	{
		title: "2024 - The Spark",
		description:
			"One restless night, I wondered: ‘Why do I feel cloudy after skipping walks?’ Vedayū began as that question.",
	},
	{
		title: "Today - The Practice",
		description:
			"Now it’s a MERN stack meditation—helping others see their hidden patterns, without judgment.",
	},
	{
		title: "Future - The Invitation",
		description:
			"Where it grows depends on you. Clone it, tweak it, or tell me what whispers it’s missing.",
	},
];

export const heartLinks = [
	{
		link: "https://github.com/rudra-xi",
		icon: <FaGithub size={24} className="text-primary" />,
		name: "GitHub",
	},
	{
		link: "https://www.linkedin.com/in/goutam-rudraxi/",
		icon: <FaLinkedin size={24} className="text-primary" />,
		name: "LinkedIn",
	},
	{
		link: "https://rudra-xi-protfolio.netlify.app/",
		icon: <FaUserCircle size={24} className="text-primary" />,
		name: "Portfolio",
	},
	{
		link: "https://www.instagram.com/rudra.xii/",
		icon: <FaInstagram size={24} className="text-primary" />,
		name: "Instagram",
	},
];
