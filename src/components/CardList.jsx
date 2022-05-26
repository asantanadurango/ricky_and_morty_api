import { useState, useEffect, useId } from 'react';
import getAllData from '../services/getAllData';
import Card from './Card';
import Pagination from './Pagination';
const Cardlist = () => {
	const id = useId();
	const [keyword, setKeyword] = useState('');
	const [info, setInfo] = useState({});
	const [results, setResults] = useState([]);

	const handlerInputText = e => setKeyword(e.target.value);

	const handlerNextPage = _ => {
		getData(info.next);
		window.scrollTo(0, 0);
	};
	const handlerDownPage = _ => {
		getData(info.prev);
		window.scrollTo(0, 0);
	};

	const getData = async param => {
		const data = await getAllData(param);
		setResults(data.results);
		setInfo(data.info);
	};

	// mounted and Udated keyword
	useEffect(() => {
		getData(keyword);
	}, [keyword]);

	const numerPage = () => {
		let n = info.next ? info.next?.split('=')[1] : info.prev?.split('=')[1];
		typeof n === 'string' && (n = n.replace('&name', ''));
		return info.next ? Number(n) - 1 : Number(n) + 1;
	};

	return (
		<div className='container-list'>
			<label className='labelSearch' htmlFor='inpSeacrh'>
				Search
			</label>
			<input className='inpSearch' onChange={handlerInputText} type='text' id='inpSeacrh' />
			<strong className='numberPage'>Page #{numerPage() || 1}</strong>
			<Pagination info={info} up={handlerNextPage} down={handlerDownPage} />
			<ul className='characterList'>
				{results.map(({ name, status, species, gender, image, episode }, idx) => (
					<Card
						key={`${id}-${idx}`}
						name={name}
						status={status}
						species={species}
						gender={gender}
						urlImg={image}
						episode={episode}
					/>
				))}
			</ul>
			<Pagination info={info} up={handlerNextPage} down={handlerDownPage} />
		</div>
	);
};

export default Cardlist;
