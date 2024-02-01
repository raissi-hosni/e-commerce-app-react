import { list_discount } from "./children/ProductLists";
import { heart ,share,fas,ins,x} from "../assets/Shareimg";
const Weeks_discount = () => {

  return (
    <section className='section mt-8'>
        <span className="main_pre_title">our discount</span>
        <span className="main_title">Week's discount</span>
        <div className="section_block">
           {list_discount.map((crd,indx)=>(
            <div key={indx} className="discount_card group">
                <div className=" block_share  group-hover:-translate-x-16">
                    <button className="discount_card_btn"><img src={heart} alt="heart" /></button>
                    <div className=" discount_card_share">
                    <button className=" "><img src={share} alt="share" /></button>
                     <div  className="social ">
                        <img className="w-[17px] hover:scale-125 hover:-translate-y-0.5" src={fas} alt="facebook" />
                        <img className="w-[17px] hover:scale-125 hover:-translate-y-0.5" src={ins} alt="instagram" />
                        <img className="w-[17px] hover:scale-125 hover:-translate-y-0.5" src={x} alt="x" />
                     </div>
                    </div>
                </div>
                <div className="discount_details">
                <img className="h-[120px] " src={crd.IMG} alt={crd.NAME} />
                <span className="text-lg text-blue-900 ">{crd.NAME}</span>
               
                <div className="flex justify-center items-center gap-8 max-sm:gap-4">
                    <button className="about_btn max-sm:ml-0">Add to card</button>
                    <div className="flex items-center flex-col ">
                        <span className="text-lg max-sm:text-sm font-semibold text-green-600">{crd.NEW_PRICE}</span>
                        <span className="line-through text-lg max-sm:text-sm text-[#777676]">{crd.OLD_PRICE}</span>
                    </div>
                </div>
                </div>
                <div className="discount_description group-hover:flex">
                <p className="text-sm text-slate-600 ">{crd.DESCRIPTION}</p>
                </div>
               
                
            </div>
           ))}
        </div>
    </section>
  )
}

export default Weeks_discount