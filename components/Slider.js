import { Navigation, Keyboard } from 'swiper';
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { Swiper, SwiperSlide } from 'swiper/react';
import styles from '../styles/Slider.module.scss'

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Image from 'next/image'
import {useRef} from "react";

const Slider = () => {

    const swiperNavPrevRef = useRef(null)
    const swiperNavNextRef = useRef(null)

    return (
        <div className={styles.container}>
            <Swiper
                modules={[Navigation, Keyboard]}
                slidesPerView={1}
                navigation={{
                    prevEl: swiperNavPrevRef.current,
                    nextEl: swiperNavNextRef.current
                }}

                onInit={swiper => {
                    swiper.params.navigation.prevEl = swiperNavPrevRef.current;
                    swiper.params.navigation.nextEl = swiperNavNextRef.current;
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}

                keyboard={{
                enabled: true,
                onlyInViewport: false,
            }}
                speed={500}
                loop
            >
                {/*width: 100% object-fit: cover*/}
                <SwiperSlide style={{width: '100%', height: 567, padding: 0, margin: 0}}>
                    <Image src='/images/picture.jpg' layout='fill' objectFit={'cover'}/>
                </SwiperSlide>
                <SwiperSlide style={{width: '100%', height: 567, padding: 0, margin: 0}}>
                    <Image src='/images/picture.jpg' layout='fill' objectFit={'cover'}/>
                </SwiperSlide>
                <SwiperSlide style={{width: '100%', height: 567, padding: 0, margin: 0}}>
                    <Image src='/images/picture.jpg' layout='fill' objectFit={'cover'}/>
                </SwiperSlide>
                <SwiperSlide style={{width: '100%', height: 567, padding: 0, margin: 0}}>
                    <Image src='/images/picture.jpg' layout='fill' objectFit={'cover'}/>
                </SwiperSlide>

                <div className={styles.swiperNavPrevRef} ref={swiperNavPrevRef}>
                    <BsFillArrowLeftCircleFill size={37} color={'#fff'} />
                </div>
                <div className={styles.swiperNavNextRef} ref={swiperNavNextRef}>
                    <BsFillArrowRightCircleFill size={37} color={'#fff'} />
                </div>
            </Swiper>
        </div>
    )
};

export default Slider;
