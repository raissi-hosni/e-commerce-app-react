import { heart } from '../assets/Shareimg';
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import {  Autoplay } from 'swiper/modules';
import { top_informatic_list } from './children/ProductLists';
// Import Swiper styles
import "swiper/css/bundle";


const Top_informatic_products = () => {
    const [num_cards, setNum_cards] = useState<number>(4);
    const newswiper=useSwiper();
    // Update the window width state on resize
  useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth>=1068) setNum_cards(4);
        if((window.innerWidth<1068) && (window.innerWidth>=816)) setNum_cards(3);
        if(window.innerWidth<816 && window.innerWidth>=528) setNum_cards(2);
        if(window.innerWidth<528) setNum_cards(1);
      
    };

    // Initial call to set the initial window width
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
    
    
  return (
    <div className='Top_products'>
        <div className='flexbetween w-full h-16 bg-[#fff] text-lg font-bold'>
           <span className='max-sm:text-sm max-xm:text-xm'>Top informatic Products</span>
           <div className='flexcenter gap-4 px-1'>
           <span onClick={() => { if (newswiper)newswiper.slideNext()}} className='controle_swiper_btn rounded-l-full'>❮</span>
           <span onClick={() => newswiper.slidePrev()} className='controle_swiper_btn rounded-r-full'>❯</span>

           </div>
        </div>
        <div className='w-full py-7 px-2'>
           <Swiper
            _swiper={(swiper) => {
                // Use this swiper instance for any further operations
                console.log('Swiper instance:', swiper);
              }}
            modules={[ Autoplay]}
            slidesPerView={num_cards}
            spaceBetween= {30}
            centeredSlides= {(num_cards>1) ? false : true}
            autoplay= {{
              delay: 5000,
              disableOnInteraction: false,
            }}
           >
             {top_informatic_list.map((product,index)=>(
                <SwiperSlide >
                <div className='pop_card resize_card group '>
                    <button className='heart_btn group-hover:-translate-x-16 '><img src={heart} alt="heart" /></button>
                    <img className='h-[80px]' src={product.URL} alt={product.NAME} />
                    <span className='font-semibold'>{product.NAME}</span>
                    <div className='flexcenter gap-5'>
                        <span className='text-green-600 font-bold text-lg'>{product.PRICE}</span>
                        <button className='swiper_cards_btn'>add to card</button>
                    </div>
                </div>
             </SwiperSlide>
             ))}
           </Swiper>
        </div>
    </div>
  )
}

export default Top_informatic_products