import React from 'react'
import Card from './Card'
import nauman from '../images/nauman.webp';
import nauman1 from '../images/nauman1.webp';
import jennifer from '../images/jennifer.webp';
import aslam from '../images/aslam.webp';
// import arif from '../images/arif.webp';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';

const Teacher = () => {
  return (
    <div className='container about'>
        <h2 className='text-center mb-4'>Our Teachers</h2>
        <div className="container" style={{ marginTop: '50px'  }}>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
        //   pagination={{
        //     clickable: true,
        //     containerClass: 'custom-pagination-container',
        //     wrapperClass: 'custom-pagination-wrapper',
        //   }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <div className="card spcard" >
              <img src={nauman} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Nauman Ijaz</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Repeat SwiperSlide for other slides */}
          <SwiperSlide>
            <div className="card spcard">
              <img src={jennifer} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Jennifer Lawrenece</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus.</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Repeat SwiperSlide for other slides */}
          <SwiperSlide>
            <div className="card spcard" >
              <img src={aslam} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Aslam saleem</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus.</p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="card spcard" >
              <img src={nauman1} className="card-img-top img-fluid" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Arif Yaqoob</h5>
                <p className="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, natus.</p>
              </div>
            </div>
          </SwiperSlide>
     
          {/* Repeat SwiperSlide for other slides */}
        </Swiper>
      </div>

    </div>
  )
}

export default Teacher