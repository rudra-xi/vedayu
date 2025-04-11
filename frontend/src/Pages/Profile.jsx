import React, { useState, useEffect, useContext } from "react";
import { SectionHeaders, Title } from "../Components";
import { FaPlus, FaTrash, FaBell, FaDotCircle } from "react-icons/fa";
import { AppContext } from "../Context/AppContext";

function Profile() {
	const { theme, toggleTheme } = useContext(AppContext);

	const [habits, setHabits] = useState([
		{ id: 1, name: "Drink 4L water daily", notification: true },
		{ id: 2, name: "Morning meditation", notification: false },
	]);
	const [newHabit, setNewHabit] = useState("");

	// Load saved habits from localStorage
	useEffect(() => {
		const savedHabits = localStorage.getItem("userHabits");
		if (savedHabits) {
			setHabits(JSON.parse(savedHabits));
		}
	}, []);

	// Save habits to localStorage when they change
	useEffect(() => {
		localStorage.setItem("userHabits", JSON.stringify(habits));
	}, [habits]);

	// Set up notifications
	useEffect(() => {
		habits.forEach((habit) => {
			if (habit.notification) {
				// In a real app, you would use the Notification API or a service worker
				console.log(
					`Notification scheduled for habit: ${habit.name}`
				);
			}
		});
	}, [habits]);

	const addHabit = () => {
		if (newHabit.trim()) {
			const newHabitObj = {
				id: Date.now(),
				name: newHabit.trim(),
				notification: false,
			};
			setHabits([...habits, newHabitObj]);
			setNewHabit("");
		}
	};

	const deleteHabit = (id) => {
		setHabits(habits.filter((habit) => habit.id !== id));
	};

	const toggleNotification = (id) => {
		setHabits(
			habits.map((habit) =>
				habit.id === id
					? { ...habit, notification: !habit.notification }
					: habit
			)
		);
	};

	return (
		<section>
			<Title Title={"Prōfile"} SubTitle={"Make Vedayū yours."} />

			<div className="flex gap-4 items-center justify-center mb-8">
				<p className="font-inf font-bold">Interface vibe:</p>

				<button
					onClick={toggleTheme}
					className="checkbox-wrapper-51"
				>
					<input
						id="cbx-51"
						type="checkbox"
						checked={theme === "dark"}
						onChange={toggleTheme}
					/>
					<label className="toggle" htmlFor="cbx-51">
						<span>
							<svg
								viewBox="0 0 10 10"
								height="10px"
								width="10px"
							>
								<path d="M5,1 L5,1 C2.790861,1 1,2.790861 1,5 L1,5 C1,7.209139 2.790861,9 5,9 L5,9 C7.209139,9 9,7.209139 9,5 L9,5 C9,2.790861 7.209139,1 5,1 L5,9 L5,1 Z" />
							</svg>
						</span>
					</label>
				</button>
			</div>

			<div className="max-w-2xl mx-auto">
				<SectionHeaders
					sectionHead={"Personalize Your Habits"}
					sectionText={
						"Tailor your experience by adding or removing the habits that matter most to you. Whether it’s practicing gratitude, staying active, or any other routine, make it uniquely yours to track and grow."
					}
				/>

				<div className="mt-6 flex sm:flex-row flex-col dark:text-primary gap-3">
					<input
						type="text"
						value={newHabit}
						onChange={(e) => setNewHabit(e.target.value)}
						placeholder="Add new habit (e.g., Exercise 30 mins)"
						className="flex-1 p-3 border-2 border-primary bg-tertiary dark:border-accent rounded-2xl outline-none"
					/>
					<button
						onClick={addHabit}
						className="bg-accent sm:w-35 w-45 dark:border-tertiary border-2 border-primary p-3 rounded-2xl flex items-center justify-center cursor-pointer hover:scale-95 transition-all duration-300 ease-custom self-center"
					>
						<FaPlus className="mr-2" /> Add
					</button>
				</div>

				<div className="mt-5">
					{habits.map((habit) => (
						<div
							key={habit.id}
							className="flex items-center justify-between p-4"
						>
							<span className="font-medium  flex items-center justify-center gap-5">
								<FaDotCircle
									size={12}
									className="dark:text-accent"
								/>{" "}
								{habit.name}
							</span>
							<div className="flex items-center space-x-3">
								<button
									onClick={() =>
										toggleNotification(habit.id)
									}
									className={`p-2 rounded-full transition-all duration-300 ease-custom cursor-pointer ${
										habit.notification
											? "text-accent bg-primary dark:bg-accent dark:text-primary"
											: " "
									}`}
									aria-label={
										habit.notification
											? "Disable notification"
											: "Enable notification"
									}
								>
									<FaBell />
								</button>
								<button
									onClick={() =>
										deleteHabit(habit.id)
									}
									className="p-2   cursor-pointer rounded-full hover:bg-accent dark:hover:text-primary transition-all duration-300 ease-custom"
									aria-label="Delete habit"
								>
									<FaTrash />
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Profile;
