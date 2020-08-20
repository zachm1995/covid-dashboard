import React from 'react';

export default function ResultCard (props) {
	return (
		<div className="result-card">
			{props.item.state}
		</div>
	);
}