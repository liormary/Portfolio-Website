import React from 'react'
import './recommendations.css'
import TOMER from '../../assets/tomer.jpg'
import RECOMEND from '../../assets/recommended.jpg'
import { Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


const Recommendations = () => {
  return (
    <section id='recommendations'>
      <h5>Reviews From Colleagues</h5>
      <h2>Recommendations</h2>

      <Swiper         slidesPerView={1}
        spaceBetween={40}
        loop={true}
        pagination={{
        clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="container recommendations__container">

        <SwiperSlide className='recommendation'>
          <div className="client__avatar">
            <img src={TOMER} alt='profile photo' />
          </div>
          <h5 className='client__name'>Tomer Grossman</h5>
          <small className='client__review'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quidem mollitia, fuga sed accusantium vel ipsa similique ratione eaque, aliquid, sequi qui dolores et expedita enim quas quaerat dolor recusandae.</small>
        </SwiperSlide>

        <SwiperSlide className='recommendation'>
          <div className="client__avatar">
            <img src={RECOMEND} alt='profile photo' />
          </div>
          <h5 className='client__name'>Would you like to recommend me?</h5>
          <small className='client__review'>Feel free to contact me to write a recommendation</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Recommendations
