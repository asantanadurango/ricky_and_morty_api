import React from 'react';

const Pagination = ({ up, down, info }) => {
	// console.log(info);
	return (
		<div className='pagination'>
			{
				<button onClick={down} className='btn-pagination'>
					PREV
				</button>
			}
			<button onClick={up} className='btn-pagination'>
				NEXT
			</button>
		</div>
	);
};

export default Pagination;
