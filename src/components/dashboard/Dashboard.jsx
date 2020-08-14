import React from "react";
import FilterBar from './filter_bar/FilterBar';
import ResultCard from './result_card/ResultCard';

export default function Dashboard(props) {
	return (
		<div className="dashboard">
			<FilterBar />
			<div className="dashboard__results-container">
				{props.items.map((item, index) => {
					return <ResultCard key={index} item={item} />;
				})}
			</div>
		</div>
	);
}
