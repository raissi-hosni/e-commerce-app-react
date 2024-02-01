import { heart } from '../assets/Shareimg';
import { useEffect,useState } from 'react';
import { Swiper, SwiperSlide,useSwiper } from 'swiper/react';
import {  Autoplay,Scrollbar } from 'swiper/modules';
import { top_sport_list } from './children/ProductLists';
// Import Swiper styles
import "swiper/css/bundle";



const Top_sport_products = () => {
    const [num_cards, setNum_cards] = useState<number>(5);
    const newswiper=useSwiper();
    // Update the window width state on resize
  useEffect(() => {
    const handleResize = () => {
        if(window.innerWidth>=1100) setNum_cards(5);
        if((window.innerWidth<1100) && (window.innerWidth>=897)) setNum_cards(4);
        if(window.innerWidth<897 && window.innerWidth>=687) setNum_cards(3);
        if(window.innerWidth<687 && window.innerWidth>=487) setNum_cards(2);
        if(window.innerWidth<487) setNum_cards(1);
      
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
    <div className='Top_products bg-[#fff]'>
        <div className='flexbetween w-full h-10 bg-[#fff] text-lg font-bold'>
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
            modules={[ Autoplay,Scrollbar]}
            slidesPerView={num_cards}
            spaceBetween= {0}
            centeredSlides= {(num_cards>1) ? false : true}
            scrollbar={{ draggable: true }}
            autoplay= {{
              delay: 5000,
              disableOnInteraction: false,
            }}
             loop={true}
           >
             {top_sport_list.map((product,index)=>(
                <SwiperSlide  >
                <div className='sport_card '>
                   <div className={'w-[200px] h-[200px] rounded-full flexcenter bg-green-500'}>
                      <img className='h-[80px]' src={product.URL} alt={product.NAME} />
                   </div>
                    <span className='absolute bg-[#fff] bottom-0 p-2 w-full h-[30%] flexcenter'>{product.NAME}</span>
                </div>
             </SwiperSlide>
             ))}
           </Swiper>
        </div>
    </div>
  )
}

export default Top_sport_products