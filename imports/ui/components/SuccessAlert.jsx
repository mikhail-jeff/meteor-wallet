import React from 'react';

export const SuccessAlert = ({ message }) => {
	return (
		<div className='rounded-md bg-green-200 p-4'>
			<div className='flex'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='h-5 w-5 text-green-600'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>

				<div className='ml-3'>
					<p className='text-sm font-medium text-green-800'>{message}</p>
				</div>
			</div>
		</div>
	);
};
