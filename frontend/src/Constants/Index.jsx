import {
	MdOutlineSupervisorAccount,
	MdOutlineInsights,
	MdDarkMode,
	MdOutlineHistory,
} from "react-icons/md";

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
