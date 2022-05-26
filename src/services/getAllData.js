const getAllData = async (keyword = 'https://rickandmortyapi.com/api/character') => {
	let results;
	if (!keyword.includes('https://')) {
		const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${keyword}`);
		results = await res.json();
	} else {
		const res = await fetch(keyword);
		results = await res.json();
	}
	return results;
};

export default getAllData;
