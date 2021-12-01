
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import Swiper core and required modules
import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper';
  
  // install Swiper modules
  SwiperCore.use([Autoplay,Pagination,Navigation]);

  
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination"
import "swiper/css/navigation"


export default function Slider() {
    return (
        <>
            <div className="swiper home-slider">
                <Swiper
                    navigation={true}
                    spaceBetween={0}
                    slidesPerView={1}
                    centeredSlides={true}
                    autoplay={{
                        "delay": 3000,
                        "disableOnInteraction": false
                      }}
                   
                    
                    pagination={{ clickable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide className="swiper-slide">
                        <div className="box" style={{ background: 'url(images/home-bg-1.jpg) no-repeat' }}>
                            <div className="content">
                                <span>never stop</span>
                                <h3>exploring</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                <a href="#" className="btn">get started</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide">
                        <div className="box second" style={{ background: 'url(images/home-bg-2.jpg) no-repeat' }}>
                            <div className="content">
                                <span>make tour</span>
                                <h3>amazing</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                                <a href="#" className="btn">get started</a>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide className="swiper-slide"><div className="box" style={{ background: 'url(images/home-bg-3.jpg) no-repeat' }}>
                        <div className="content">
                            <span>explore the</span>
                            <h3>new world</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                            <a href="#" className="btn">get started</a>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>

                

            </div>                      
        </>
    )
}
