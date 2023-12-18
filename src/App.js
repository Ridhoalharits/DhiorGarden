import CardStatus from "./components/CardStatus/CardStatus";
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";

import "./App.css";
function App() {
	const sendDataToFirebase = (value) => {
		console.log(value);
		const databaseURL =
			"https://miot-dhior-default-rtdb.asia-southeast1.firebasedatabase.app"; // Replace with your Firebase project URL

		fetch(`${databaseURL}/monitor/data.json`, {
			method: "PATCH",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(value),
		})
			.then((response) => {
				if (response.ok) {
					console.log("Data sent to Firebase successfully!");
				} else {
					throw new Error("Error sending data to Firebase");
				}
			})
			.catch((error) => {
				console.error("Error sending data to Firebase:", error);
			});
	};

	const sendOne = () => {
		sendDataToFirebase({ GarageLED: 1 });
	};

	const sendZero = () => {
		sendDataToFirebase({ GarageLED: 0 });
	};
	const endpoint =
		"https://miot-dhior-default-rtdb.asia-southeast1.firebasedatabase.app/monitor.json";
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		const fetchData = () => {
			fetch(endpoint)
				.then((response) => response.json())

				.then(({ data }) => {
					console.log(data);
					setPosts(data);
				})
				.catch((error) => console.error("Error fetching data:", error));
		};
		const intervalId = setInterval(fetchData, 500);

		return () => {
			clearInterval(intervalId);
		};
	}, []);

	return (
		<div>
			<div className="App">
				<CardStatus
					suhu={posts.Kelembaban}
					pump={posts.status_pompa}
					air_temp={posts.Suhu}
					air_humid={posts.Udara}
					water_level={posts.level_air}
					GarageLED={posts.GarageLED}
				/>
			</div>
			<div className="Row-base">
				<Button variant="contained" onClick={sendOne}>
					ON
				</Button>
				<Button onClick={sendZero}>OFF</Button>
			</div>
		</div>
	);
}

export default App;
