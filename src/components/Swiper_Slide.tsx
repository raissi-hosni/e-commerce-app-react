import { useRef, useEffect } from 'react';
import { home_swiper_list } from './children/ProductLists';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import {  Pagination, Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css/bundle";


const Swiper_Slide = () => {
  const swiper_marg = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = document.querySelector(".header") as HTMLDivElement | null;

    const updateMargin = () => {
      if (header) {
        const headerheight = header.offsetHeight;

        if (swiper_marg.current) {
          swiper_marg.current.style.marginTop = `${headerheight+1}px`;
        }
      }
    };

    // Initial update on mount
    updateMargin();
    // Add event listener for window resize
    window.addEventListener('resize', updateMargin);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateMargin);
    };
  }, []); 
  
  return (
    <div ref={swiper_marg} className='home_swiper'>
      <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween= {30}
      centeredSlides= {true}
      autoplay= {{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{ 
        el:".pagination",
        clickable: true }}
        loop={true}
    >
     {home_swiper_list.map((elm,index)=>(
       <SwiperSlide >
       <div key={index} className='swiper_elements'>
       <div className='slide_details'>
         <span className='text-2xl max-sm:text-lg font-bold text-green-600'>our special product</span>
         <span className='text-6xl max-md:text-4xl max-sm:text-2xl font-bold text-slate-700'>{elm.NAME}</span>
         <p className='text-xl max-sm:text-sm font-thin text-[#3d3c3c] '>{elm.DESCRIPTION}</p>
         <button className='swiper_btn'>Order now</button>
       </div>
       <div>
         <img className='h-[400px] max-md:h-[350px] max-sm:max-h-[200px] ' src={elm.IMG} alt={elm.NAME} />
       </div>
       </div>
     </SwiperSlide>
     ))}
      <div className='text-center'>
      <div className='pagination'></div>
      </div>
    </Swiper>
   
    </div>
  );
}

export default Swiper_Slide;
