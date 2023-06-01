import CardStatus from "./components/CardStatus/CardStatus";
import React, { useState, useEffect } from "react";
import "./App.css";
function App() {
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
				<CardStatus suhu={posts.Kelembaban} pump={posts.status_pompa} />
			</div>
			<div className="Row-base"></div>
		</div>
	);
}

export default App;
