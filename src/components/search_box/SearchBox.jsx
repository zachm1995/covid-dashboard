import React, { useEffect, useState } from "react";
import axios from 'axios';

export default function SearchBox(props) {
	const [items, setItems] = useState(["David", "Tom", "Dick", "Harry"]);

	const [suggestions, setSuggestions] = useState([]);

	useEffect(() => {
		let url = "https://data.cdc.gov/resource/9bhg-hcku.json"
		axios.get(url)
		.then((resp) => {
			console.log(resp.data);
			setItems(resp.data);
		})
		.catch((error) => {
			console.log(error);
		})
	}, [])


	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>
			<ul>
				{ items.map((item, index) => {
					return <li>{item.age_group}</li>
				})}
			</ul>
		</div>
	);
}
