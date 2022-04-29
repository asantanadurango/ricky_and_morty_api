import { useState, useEffect } from 'react';

const UseApiRequest = parameter => {
	const [allData, setAllData] = useState({});
	const getData = async parameter => {
		let res, data;
		if (isNum(parameter)) {
			res = await fetch(`https://rickandmortyapi.com/api/character/${parameter}`);
			data = await res.json();
		} else {
			res = await fetch(`https://rickandmortyapi.com/api/character/?name=${parameter}`);
			data = await res.json();
			data = data.results[0];
		}
		setAllData(data);
	};

	useEffect(
		function () {
			getData(parameter);
		},
		[parameter]
	);
	return { allData };
};

const isNum = val => !isNaN(val);

export default UseApiRequest;
