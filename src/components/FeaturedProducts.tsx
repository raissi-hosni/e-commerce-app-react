import { useEffect,useRef } from 'react';
import { list_featured } from './children/ProductLists';
import { star_line2,star_fill2 } from '../assets/Shareimg';
const FeaturedProducts = () => {
    const  list_img = useRef<NodeListOf<HTMLImageElement> | null>(null);
    useEffect(()=>{
       list_img.current=document.querySelectorAll(".image_featured");
    })
    const change_image=(img:string,num:number)=>{
       if(list_img.current) list_img.current[num].src=img;
    }
    const create_array=(n:number):Array<string>=>{
        let ar= new Array<string>();
        for(let i=0;i<n;i++){ar.push("fill")}
        for(let i=0;i<(5-n);i++){ar.push("line")}
        return ar
    }
  return (
    <section className='section mt-8'>
        <span className="main_title"><b className='text-orange-500'>Featured </b>products</span>
        <div className="section_block w-[85%] max-sm:w-[98%]">
            {list_featured.map((cd,indx)=>(
               <div key={indx} className='featured_card'>
                {/*====imgs====*/}
                    <div className='featured_img '>
                    <div className='w-[20%]  h-full flexcenter flex-col gap-2 '>
                         <div onClick={()=>change_image(cd.URL1,indx)} className=' overflow-x-hidden h-[25%] flexcenter w-[80%] border border-[#878383]'>
                            <img className='h-16' src={cd.URL1} alt={cd.Name} />
                        </div>
                         <div onClick={()=>change_image(cd.URL2,indx)} className=' overflow-x-hidden h-[25%] flexcenter w-[80%] border border-[#878383]'>
                            <img className=' img_ft h-16' src={cd.URL2} alt={cd.Name} />
                        </div>
                         <div onClick={()=>change_image(cd.URL3,indx)} className=' overflow-x-hidden h-[27%] flexcenter w-[80%]  border border-[#878383]'>
                            <img className='h-[95%]' src={cd.URL3} alt={cd.Name} />
                        </div>
                      </div>
                     <div className='block_imgs'>
                       <img  className='image_featured' src={cd.URL1} alt={cd.Name} />
                     </div>
                     
                    </div>
                {/*=====details====*/}
                    <div className='featured_details'>
                        <span className='text-xl max-xm:text-lg font-semibold'>{cd.Name}</span>
                        <div className='flex gap-1'>
                        <div className='flexcenter gap1'>
                        {create_array(cd.STAR).map((str, index) => (
                            <img width="20px" key={index} src={str === 'fill' ? star_fill2 : star_line2} alt={str} />
                        ))}
                    </div>
                            <span className='text-lg max-xm:text-sm'>({cd.REVIWS})</span>
                        </div>
                        <p className='text-[15px] text-[#2d2d2d] leading-7 max-xm:text-xs '>{cd.DESCRIPTION}</p>
                        <div className="flex items-center gap-2 pl-3 ">
                            <span className="text-xl max-sm:text-lg font-semibold text-orange-600">{cd.NEW_rice}</span>
                            <span className="line-through text-lg max-sm:text-sm text-[#777676]">{cd.OLD_price}</span>
                        </div>
                        <button className='about_btn max-xsm:mx-auto '>Add to card</button>
                    </div>
               </div>

            ))}
        </div>
    </section>
  )
}

export default FeaturedProducts