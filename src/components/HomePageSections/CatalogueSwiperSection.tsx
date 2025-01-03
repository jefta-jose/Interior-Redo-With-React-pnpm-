import {TbArrowUpRight} from 'react-icons/tb'
import { Button } from '../ui/button'
import {motion} from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { desVariants, tagVariants, titleVariants } from "@/utils/animation"


const CatalogueSwiperSection = () => {
  return (
    <div className='py-8 lg:py-28'>
        <div className=' container grid pb-8 lg:grid-cols-1'>
            <div className=' text-left'>
                <h1 className='py-4'>Modern Classic</h1>
                <h2>LUXURY DECOR TO CREATE COMFORT IN OUR HOMES</h2>
            </div>
        </div>
    </div>
  )
}

export default CatalogueSwiperSection