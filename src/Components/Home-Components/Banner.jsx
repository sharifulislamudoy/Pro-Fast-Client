import React from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Banner1 from '../../assets/banner/banner1.png'
import Banner2 from '../../assets/banner/banner2.png'
import Banner3 from '../../assets/banner/banner3.png'

const Banner = () => {
    return (
        <div className="w-full">
            <Swiper
                modules={[Pagination, Autoplay]}
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{ clickable: true }}
                className="w-full"
            >
                <SwiperSlide>
                    <img
                        src={Banner1}
                        alt="Fastest Delivery"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Banner2}
                        alt="Delivery in 30 Minutes"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        src={Banner3}
                        alt="Delivery in 30 Minutes"
                        className="w-full h-auto object-cover rounded-md"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;