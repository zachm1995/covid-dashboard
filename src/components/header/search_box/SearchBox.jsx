import React, { useEffect, useState } from "react";
import SuggestionsBox from './suggestions_box/SuggestionsBox';

export default function SearchBox(props) {
	const [search, setSearch] = useState('');

	return (
		<div className={`search-box`}>
			<input
				type="text"
				placeholder="What are you looking for?"
				onChange={(e) => {
					setSearch(e.target.value);
					props.handleSearch(e);
				}}
			/>
			<SuggestionsBox />
		</div>
	);
}
