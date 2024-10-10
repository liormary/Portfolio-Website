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
            <img src={TOMER} alt='Profile photo of Tomer Grossman' />
          </div>
          <h5 className='client__name'>Tomer Grossman</h5>
          <small className='client__review'>As Lior's former manager I had the privilege of working with Lior on several projects, and her impact on our team was remarkable. Lior is an outstanding team player who consistently fosters collaboration and open communication. She has a natural ability to work seamlessly with others, always contributing her insights and supporting her teammates. She brought fresh ideas, solved complex problems, and helped drive every project she was part of toward success. 

One of Lior's standout qualities is her incredible sense of responsibility. She takes initiative, meets deadlines with precision, her dedication to delivering high-quality work is unwavering, and she consistently exceeds expectations.

I have no doubt that she will continue to excel in any future endeavors, and I highly recommend her to any team or organization.</small>
        </SwiperSlide>

        <SwiperSlide className='recommendation'>
          <div className="client__avatar">
            <img src={RECOMEND} alt='Profile photo for recommendation' />
          </div>
          <h5 className='client__name'>Would you like to recommend me?</h5>
          <small className='client__review'>Feel free to contact me to write a recommendation</small>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default Recommendations
