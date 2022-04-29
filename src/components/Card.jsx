const Card = ({ name, status, species, gender, urlImg }) => {
	return (
		<li style={{ width: 300 }}>
			<figure>
				<img src={urlImg} alt='' />
			</figure>
			<div className='itemsCharacterWrapper'>
				<h3 className='itemCharacterTitle'>Name: {name}</h3>
				<h3 className='itemCharacterTitle'>Status: {status}</h3>
			</div>
			<div className='itemsCharacterWrapper'>
				<h3 className='itemCharacterTitle'>Species: {species}</h3>
				<h3 className='itemCharacterTitle'>Gender: {gender}</h3>
			</div>
		</li>
	);
};

export default Card;
