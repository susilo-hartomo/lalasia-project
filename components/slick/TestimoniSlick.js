import React, { Component } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';
import { leftSlide, rightSlide } from '../../assets/icons';
import { testimonial } from 'constants/testimonial';
import TestimoniCard from '../card/TestimoniCard';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={`${className} z-20`}
			style={{ ...style, display: 'block', right: 25, width: 52, height: 52, top: 180 }}
			onClick={onClick}>
			<Image src={rightSlide} width={52} height={52} />
		</div>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;

	return (
		<div
			className={`${className} z-30`}
			style={{ ...style, display: 'block', left: 25, width: 52, height: 52, top: 180 }}
			onClick={onClick}>
			<Image src={leftSlide} width={52} height={52} />
		</div>
	);
}

export default class TestimoniSlick extends Component {
	render() {
		const settings = {
			className: 'center variable-width slider overflow-hidden',
			centerMode: true,
			centerPadding: '300px',
			infinite: true,
			speed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 5000,
			cssEase: "linear"

			// nextArrow: <SampleNextArrow />,
			// prevArrow: <SamplePrevArrow />,
		};
		return (
			<Slider {...settings} className='my-12'>
				{testimonial.map((item, i) => (
					<TestimoniCard
						key={i}
						iconQute={item.iconQute}
						quote={item.quote}
						img={item.img}
						name={item.name}
						iconStar={item.iocnStar}
						rate={item.rate}
					/>
				))}
			</Slider>
		);
	}
}
