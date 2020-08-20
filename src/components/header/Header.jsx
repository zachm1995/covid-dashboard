import React from "react";
import SearchBox from "./search_box/SearchBox";
import CovidIcon from "../../covid_icon.svg";

export default function Header(props) {
	return (
		<header className="header">
			<img
				src={CovidIcon}
				alt="coronavirus icon"
				className="header__icon"
			/>
			<div className="header__title">Covid-19 Data</div>
			<SearchBox handleSearch={props.handleSearch} />
		</header>
	);
}
