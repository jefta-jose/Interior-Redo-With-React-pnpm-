import {TbArrowUpRight} from 'react-icons/tb'
import { Button } from '../ui/button'
import {motion} from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import { desVariants, tagVariants, titleVariants } from "@/utils/animation"


const CatalogueSwiperSection = () => {
  return (
    <div className='container mx-auto py-8 lg:py-28'>
        <div className=' container grid pb-8 lg:grid-cols-1'>
            <div className=' text-center'>
                <motion.h1 
                    initial="offscreen"
                    whileInView={"onscreen"}
                    variants={titleVariants}
                className='py-4 text-xl font-medium lg:text-6xl lg:py-0'>Modern Classic</motion.h1>
                
                <motion.h2 
                initial="offscreen"
                whileInView={"onscreen"}
                variants={desVariants}
                className='pb-6 text-xl font-bold tracking-wider mt-5 '>LUXURY DECOR TO CREATE COMFORT IN OUR HOMES</motion.h2>
            </div>

            <motion.div 
             initial="offscreen"
             whileInView={"onscreen"}
             variants={tagVariants}
            
            className=' grid grid-cols-2 text-gray-500 gap-8 px-4'>
              <p>
              With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home. With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
              </p>

              <p>
              With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home. With our passion for design and decor, we have created a collection of furniture and accessories that will help you create a comfortable and stylish home.
              </p>
            </motion.div>

            <a className=' mx-auto' href="/gallery">
              <Button className='  inline-flex items-center px-8 py-3 m-4  text-white rounded-full shadow-lg hover:bg-gray-800 hover:ring-2 hover:ring-gray-950 ring-offset-2 '>
                View Gallery <TbArrowUpRight className='h-5 w-5 ml-2'/>
              </Button>
            </a>
        </div>

        {/**swiper section */}
        <Swiper
        slidesPerView={1}
        breakpoints={{
          640:{
            slidesPerView:2,
            spaceBetween: 20,
          },
          1024:{
            slidesPerView: 3,
            spaceBetween : 50,
          }
        }}

        autoplay = {{delay:2500 , disableOnInteraction: false}}
        modules={[Autoplay]}
        >
          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper1.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper2.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper3.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper4.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper5.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper5.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper7.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>

          <SwiperSlide>
            <img 
              src="/src/assets/image/swiper8.jpg" alt="" 
              width={520}
              height={220}
              className='w-full rounded-sm'
            />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CatalogueSwiperSection