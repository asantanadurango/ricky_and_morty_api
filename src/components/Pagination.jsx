const Pagination = ({ up, down, info }) => {
	return (
		<div className='pagination'>
			{info.prev && (
				<button onClick={down} className='btn-pagination'>
					PREV
				</button>
			)}
			{info.next && (
				<button onClick={up} className='btn-pagination'>
					NEXT
				</button>
			)}
		</div>
	);
};

export default Pagination;
