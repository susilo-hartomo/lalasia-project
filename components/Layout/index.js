import React, { useEffect } from 'react';
import Head from 'next/head';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout({ children, title, content }) {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<div className='w-screen overflow-hidden'>
			<Head>
				<title>{title ? title : 'Welcome to Lalasia'}</title>
				<meta name='description' content={content ? content : 'Generated by create next app'} />
				<link rel='icon' href='/favicon-lalasia.ico' />
			</Head>

			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
