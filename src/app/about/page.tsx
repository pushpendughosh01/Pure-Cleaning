import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/navbar/Navbar';
import React from 'react';
import SmoothScrolling from '@/components/SmoothScrolling';


const page = () => {

	return (
		<div>
			<Navbar />
			<SmoothScrolling>
				<Footer />
			</SmoothScrolling>
		</div>
	);
};

export default page;
