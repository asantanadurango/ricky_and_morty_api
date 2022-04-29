const getAllData = async (keyword = 1) => {
	console.log(keyword);
	let results;
	if (typeof keyword === 'string') {
		const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${keyword}`);
		results = await res.json();
	} else {
		const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${keyword}`);
		results = await res.json();
	}
	return results;
};

export default getAllData;
