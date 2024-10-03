import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import SmoothScrolling from '@/components/SmoothScrolling';
import AboutMain from './AboutMain';


const page = () => {

	return (
		<div>
			<Navbar />
			<SmoothScrolling>
			<AboutMain/>
			<Footer />
			</SmoothScrolling>
		</div>
	);
};

export default page;
