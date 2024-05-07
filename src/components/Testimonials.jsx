import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import st1 from '../images/st1.webp'

const Testimonials = () => {
  return (
    <>
      <div className="container testimonial" style={{ marginTop: '50px'  }}>
        <h2 className='text-center mt-5 mb-5'>Our Previous Students Review</h2>
        <Swiper
          slidesPerView={1}
          spaceBetween={50}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}
          pagination={{
            clickable: true,
            containerClass: 'custom-pagination-container',
            wrapperClass: 'custom-pagination-wrapper',
          }}
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
            <div className="boxtestimonial">
           
           <p><span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim perferendis reiciendis voluptate sint repudiandae repellat sit, veritatis voluptatem ex? <span>"</span> </p>

            </div>
            <div className="imge">
            <img src={st1} className='' alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="boxtestimonial">
           
           <p><span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim perferendis reiciendis voluptate sint repudiandae repellat sit, veritatis voluptatem ex? <span>"</span> </p>

            </div>
            <div className="imge">
            <img src="https://images.pexels.com/photos/3762800/pexels-photo-3762800.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='' alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="boxtestimonial">
           
           <p><span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim perferendis reiciendis voluptate sint repudiandae repellat sit, veritatis voluptatem ex? <span>"</span> </p>

            </div>
            <div className="imge">
            <img src="https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='' alt="" />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="boxtestimonial">
           
           <p><span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim perferendis reiciendis voluptate sint repudiandae repellat sit, veritatis voluptatem ex? <span>"</span> </p>

            </div>
            <div className="imge">
            <img src="https://images.pexels.com/photos/745045/pexels-photo-745045.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='' alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="boxtestimonial">
           
           <p><span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim perferendis reiciendis voluptate sint repudiandae repellat sit, veritatis voluptatem ex? <span>"</span> </p>

            </div>
            <div className="imge">
            <img src="https://images.pexels.com/photos/697244/pexels-photo-697244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='' alt="" />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="boxtestimonial">
           
           <p><span>"</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas enim perferendis reiciendis voluptate sint repudiandae repellat sit, veritatis voluptatem ex? <span>"</span> </p>

            </div>
            <div className="imge">
            <img src="https://images.pexels.com/photos/1516440/pexels-photo-1516440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className='' alt="" />
            </div>
          </SwiperSlide>
          {/* Repeat SwiperSlide for other slides */}
         
       
        </Swiper>
      </div>
    </>
  );
}

export default Testimonials;
