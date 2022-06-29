import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import './About.css'
const About =  () => {

    return (
        <div className="about_container">
            <h1>OUR COMPANY</h1>
            <div className="aboutInfo">
                <p>Zameen.com estate agency services was started by three software engineering students from NED University of Engineering and Technology .
                    The team includes Muhammad Abdullah Aziz,Muhammad Murtaza Khan ,Muhammad Abdullah Imdad. All of them are one of the best software developers in the city as there last project have  won the
                    NED ProjectMania Camp at NED Auditorium.They have developed this public service website for people who face hurdles while dealing in any issue related to the estate industry.This app is now being used countrywide ,helping every user to tackle their residencial problems. <br />
                    <span id="follow">You can contact every member by accessing their cards on right.</span>
                </p>
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={1}

                    pagination={{ clickable: true }}

                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log('slide change')}
                    className="aboutCardContainer"
                >
                    <SwiperSlide className='singleAboutcard'>
                        <img src="ab59.jpg" alt="" />
                        <h5>Muhammad Abdullah Aziz</h5>
                        <div className="icons">
                            <a href='https://www.facebook.com'><FaFacebookSquare /></a>
                            <a href='https://www.instagram.com'><FaInstagramSquare /></a>
                            <a href='https://www.linkedin.com'><FaLinkedin /></a>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className='singleAboutcard'>
                        <img src="ab64.jpg" alt="" />
                        <h5>Muhammad Abdullah Imdad</h5>
                        <div className="icons">
                            <a href='https://www.facebook.com'><FaFacebookSquare /></a>
                            <a href='https://www.instagram.com'><FaInstagramSquare /></a>
                            <a href='https://www.linkedin.com'><FaLinkedin /></a>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide className='singleAboutcard'>
                        <img src="murtaza1.jpg" alt="" />
                        <h5>Muhammad Murtaza khan</h5>
                        <div className="icons">
                            <a href='https://www.facebook.com'><FaFacebookSquare /></a>
                            <a href='https://www.instagram.com'><FaInstagramSquare /></a>
                            <a href='https://www.linkedin.com'><FaLinkedin /></a>
                        </div>

                    </SwiperSlide>

                </Swiper>
            </div>
        </div>
    );
};

export default About;

