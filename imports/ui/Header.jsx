import React from 'react';

const Header = () => {
	return (
		<header className='bg-indigo-600'>
			<nav
				className='max-w-5xl mx-auto px-4 sm:px-6 lg:px-8'
				aria-label='Top'
			>
				<div className='w-full py-6 flex items-center justify-between border-b border-indigo-500 lg:border-none'>
					<div className='flex items-center'>
						<h1 className='text-white text-3xl font-bold'>Meteor Wallet</h1>
					</div>
				</div>
			</nav>
		</header>
	);
};

export default Header;
