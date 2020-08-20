import React from "react";
import FilterBar from "./filter_bar/FilterBar";
import ResultCard from "./result_card/ResultCard";
import PieChart from './visualizations/pie_chart/PieChart';

export default function Dashboard(props) {
	const loadingIndicator = () => {
		return <h1>LOADING</h1>;
	};

	const dashboardContainer = () => {
		return (
			<div className="dashboard__results-container">
				{props.data.map((item, index) => {
					return <ResultCard key={index} item={item} />;
				})}
			</div>
		);
	};

	return (
		<div className="dashboard">
			<FilterBar />
			{props.loaded ? dashboardContainer() : loadingIndicator()}
		</div>
	);
}
