const getAllData = async (keyword = 1) => {
	let results;
	if (typeof keyword === 'string') {
		console.log(keyword);
		const res = await fetch(`https://rickandmortyapi.com/api/character/?name=${keyword}`);
		if (res.status !== 200) {
			const redirec = await fetch(`https://rickandmortyapi.com/api/character/?page=${1}`);
			return await redirec.json();
		}
		results = await res.json();
	} else {
		const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${keyword}`);
		results = await res.json();
	}
	return results;
};

export default getAllData;
