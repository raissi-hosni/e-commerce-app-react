
import { paym,shipping,secure,sub_X,sub_fab,sub_inst,youtub,help } from "../assets/Shareimg";
import { Link } from "react-router-dom";
const Footer = () => {
  const EYEWEAR_list=[
    {NAME:"about us",LINK:"/about-us"},{NAME:"privacy policy",LINK:"/privacy-policy"},
    {NAME:"cookie policy",LINK:"/cookie-policy"},{NAME:"terms of sale",LINK:"/terms-of-sale"}
  ];
  return (
    <footer className='footer'>
      <div className='flexbetween max-lxmd:flex-wrap max-lxmd:gap-5 px-10 py-4 max-md:p-1 w-full h-[30%]'> 
          <ul className='text-lg'>
            <li className='flex items-center  gap-2 text-[#000000B8] text-lg'><img src={secure} alt="close" /><span>secure checkout</span></li>
            <li className='flex items-center gap-2 text-[#000000B8] text-lg'><img src={paym} alt="payment" /><span>secure payment</span></li>
            <li className='flex items-center gap-2 text-[#000000B8] text-lg'><img src={shipping} alt="shipping" /><span>free shipping</span></li>
          </ul>
          <div className="flexcenter max-sm:flex-wrap gap-10 max-md:gap-4 ">
              <div>
                <span className='text-xl uppercase font-bold'>newslatter</span>
                <p className='text-lg text-[#000000B8]'>follow the latest news on the latest trends</p>
              </div>
              <div className="flexcenter gap-4 max-xsm:flex-wrap ">
                <input type="email" name="email" className="sub_email" placeholder="your email" />
                <button className="py-2 px-5 flexcenter text-sm text-white font-bold rounded-md bg-orange-700 hover:bg-orange-900 ">subscribe</button>
              </div>
          </div>
      </div>
      
        <div className='flex items-center justify-center flex-col gap-8 p-4 w-full h-[70%] bg-[#000]'>
          <span className=' logo text-white '>
             Upmarketic<b className='text-orange-600 text-[30px] max-sm:text-[20px]'>.</b>
          </span>
           <div className="flex justify-between  w-full gap-1 max-md:flex-wrap">

             <div className="text-white font-semibold">
              <p className="text-lg text-orange-600 ">upmarketic eyewear</p>
              <ul className="flex flex-col gap-2">
                {EYEWEAR_list.map((items,key)=>(
                  <li className="sub_hov" key={key}><Link to={items.LINK}>{items.NAME}</Link></li>
                ))}
              </ul>
             </div>

             <div className="text-white text-sm font-semibold flex flex-col gap-2 ">
              <p className="text-lg text-orange-600 ">quick links</p>
              <Link className="sub_hov" to="/warranties">return & warranties</Link>
              <Link className="sub_hov" to="/shipping">shipping information</Link>
             </div>

             <div className="text-white flex flex-col gap-2">
              {/*==========social==========*/}
              <div className="flex flex-col gap-2">
                <p className="text-lg text-orange-600  font-semibold">follow us</p>
                <div className="flex gap-4">
                  <img className="flow_hov" src={sub_fab}alt="facebook" />
                  <img className="flow_hov" src={sub_inst} alt="instagram" />
                  <img className="flow_hov" src={sub_X} alt="x" />
                  <img className="flow_hov" src={youtub} alt="youtube" />
                </div>
              </div>
              {/*================payment methodes==============*/}
              <div>
                <p className="text-lg text-orange-600  font-semibold">payment methods</p>
                <img className="max-w-[200px]" src="https://cdn.webshopapp.com/shops/218525/files/371942398/payment-methods-epicerie-ludo.png" alt="payment" />
              </div>
             </div>
              {/*==========help=============*/}
             <div className="flex items-end" >
             <span className=" w-20 h-10 p-2 bg-orange-500 rounded-lg flexcenter gap-1 hover:scale-105">
              <img src={help} alt="help" />
             <Link to="/help">help</Link>
             </span>
             </div>
           </div>
        </div>
        <div className="bg-black w-full text-center text-white">
        <p className="text-[14px] max-sm:text-[12px] max-xm:text-[10px]">© 2024-2025 Upmarketic . <i className="text-orange-600">All rights reserved</i>. No reproduction without permission.</p>
        </div>
    </footer>
  )
}

export default Footer