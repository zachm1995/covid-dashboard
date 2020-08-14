import React, { useEffect, useState } from "react";

export default function SearchBox(props) {
	const [suggestions, setSuggestions] = useState([]);

	return (
		<div>
			<input
				type="text"
				onChange={(e) => {
					console.log(e.target.value);
				}}
			/>

		</div>
	);
}
