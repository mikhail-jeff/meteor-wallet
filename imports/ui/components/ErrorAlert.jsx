import React from 'react';

const ErrorAlert = ({ message }) => {
	return (
		<div className='rounded-md bg-red-200 p-4'>
			<div className='flex'>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth={1.5}
					stroke='currentColor'
					className='h-5 w-5 text-red-600'
				>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>

				<div className='ml-3'>
					<h3 className='text-sm font-medium text-red-800'>{message}</h3>
				</div>
			</div>
		</div>
	);
};

export default ErrorAlert;
