import { useState, useEffect } from 'react';
import getAllData from '../services/getAllData';
import Card from './Card';
import { nanoid } from 'nanoid';
import Pagination from './Pagination';
const Cardlist = () => {
	const [currentPageIdx, setCurrentPageIdx] = useState(1);
	const [keyword, setKeyword] = useState('');
	const [info, setInfo] = useState({});
	const [results, setResults] = useState([]);

	const handlerInputText = e => setKeyword(e.target.value);

	const handlerNextPage = _ => {
		setResults([]);
		setCurrentPageIdx(currentPageIdx + 1);
		window.scrollTo(0, 0);
	};
	const handlerDownPage = _ => {
		setResults([]);
		setCurrentPageIdx(currentPageIdx - 1);
		window.scrollTo(0, 0);
	};

	const getDAta = async param => {
		const data = await getAllData(param);
		setResults(data.results);
		setInfo(data.info);
	};

	// Udated keyword
	useEffect(() => {
		getDAta(keyword);
	}, [keyword]);

	// Mounted and update currentPageIdx
	useEffect(() => {
		getDAta(currentPageIdx);
	}, [currentPageIdx]);

	return (
		<div className='container-list'>
			<label htmlFor='inpSeacrh'>Search</label>
			<input className='inpSearch' onChange={handlerInputText} type='text' id='inpSeacrh' />
			<h3 className='current-page-idx'>Page #{currentPageIdx}</h3>
			<Pagination up={handlerNextPage} down={handlerDownPage} idx={currentPageIdx} />
			<ul className='characterList'>
				{results.map(({ name, status, species, gender, image, episode }) => (
					<Card
						key={nanoid()}
						name={name}
						status={status}
						species={species}
						gender={gender}
						urlImg={image}
						episode={episode}
					/>
				))}
			</ul>

			<Pagination up={handlerNextPage} down={handlerDownPage} idx={currentPageIdx} />
		</div>
	);
};

export default Cardlist;
