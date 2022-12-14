import React, { useRef } from 'react';
import Image from 'next/image';

const PortofolioServiceImg = ({ img, title, desc, idx }) => {
	const style = idx === 0 ? 'lg:w-1/3 lg:h-full' : 'lg:w-[65%] lg:h-[306px]';
	const aos =
		idx === 0
			? {
					'data-aos': 'fade-right',
					'data-aos-delay': '20',
					'data-aos-duration': '500',
					'data-aos-easing': 'ease-in-out',
			  }
			: {
					'data-aos': 'fade-left',
					'data-aos-delay': idx * 20 + 140,
					'data-aos-duration': '500',
					'data-aos-easing': 'ease-in-out',
			  };
	return (
		<div className={`w-full p-2 h-[409px] relative ${style}`} {...aos}>
			<Image src={img} alt={'portfolio' + idx} layout='fill' objectFit='cover' />
			<div className='w-full absolute bottom-0 px-7 mb-6 lg:mb-8'>
				<div className={`w-full lg:pr-4 ${idx !== 0 && 'lg:w-2/3'}`}>
					<h3 className='text-white heading'>{title}</h3>
					<p className='py-2 text-light-white paragraph tracking-wider truncate whitespace-nowrap'>{desc}</p>
					<p className='text-white paragraph cursor-pointer'>See Detail</p>
				</div>
			</div>
		</div>
	);
};

export default PortofolioServiceImg;
