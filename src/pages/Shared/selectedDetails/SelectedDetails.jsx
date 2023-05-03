import React from 'react';
import { useLoaderData } from 'react-router-dom';

const SelectedDetails = () => {
	const data = useLoaderData();
	const {likes, chefName} = data;
	console.log(likes)
	return (
		<div>
			<h1>This is selectedDetails section {likes}....{chefName}</h1>
		</div>
	);
};

export default SelectedDetails;