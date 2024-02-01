import { useState,useRef, useEffect,ChangeEvent, createElement } from 'react';
import { Link } from 'react-router-dom';
import { maps,user,heart,shop,srch,down,menu } from '../assets/Shareimg';
import {Search_bar,Nav_search,Phone_srch} from './children/Search_bar';

const Header = () => {
    let [position,setPosition]=useState("TUNIS");
    const nav1_link_lisk=[
        {
            NAME:"HOME",
            LINK:"/home",
        },
        {
            NAME:`${position}`,
            LINK:"/location",
        },
        {
            NAME:"DISCOUNT",
            LINK:"/DISCOUNT",
        },
    ]
    /*=======public================*/
    const [pub_val,setPub_val]=useState("welcome to upmarketic");

    /*==========shop===============*/
    const [shop_num,setShop_num]=useState(0);

   /*==============search===============*/
   const phone_search_ref=useRef<HTMLDivElement>(null)
     const Phone_search=()=>(
           <div ref={phone_search_ref} className='search_area'>
            <button onClick={Close_phone_search} className='font-bold text-lg w-8 h-8 p-1 flexcenter rounded-full bg-gray-700'>
                X
            </button>
            <div className='search_nav_phone'>
              <Phone_srch />
            </div>
           </div>
     )
    const Open_phone_search=()=>{
        phone_search_ref.current?.classList.toggle("flex");
    }
    const Close_phone_search=()=>{
        phone_search_ref.current?.classList.remove("flex");
    }
   
    /*===========sidebar==============*/
    
    const Openside=()=>{
        let open_sidebar=document.querySelector(".side");
        if(open_sidebar){
           open_sidebar.classList.toggle("left-0");}
    }
  /*===============shopping=================== */
  let shopp : (Element|null);
  let sig :(Element|null);
  let test_shop = true;
   useEffect(()=>{
    shopp=document.querySelector(".shopping");
   },[])
     const openclose_shop=()=>{
        if(shopp &&test_shop) {
            shopp.classList.add("flex") ;
            test_shop=!test_shop;                   
    }
        else{
            shopp?.classList.remove("flex") ;
            test_shop=!test_shop;    
        }
             
     }

  return (
    <header className='header'>
        {/*===============first navigation==============*/}
            <nav className='first_nav'>
                {/*============logo==============*/}
                    <span className=' logo '>
                        Upmarketic<b className='text-orange-600 text-[30px] max-sm:text-[20px]'>.</b>
                    </span>
                {/*=======side bar=============*/}
                 <button  className='showbar_nav1 max-sm:flex'><img src={menu} alt="showbar" /></button>
                {/*===================first_nav================*/} 
                    <ul className='flexcenter gap-5 text-white font-semibold max-sm:hidden'>
                        {nav1_link_lisk.map((lnk,index)=>{
                            if (index===1)
                                {return(<li className='flex items-center menu-a' key={index}><Link className='flexcenter ' to={lnk.LINK}><img width="18px" src={maps} alt="position" />{lnk.NAME}</Link></li>)}
                            else
                                {return(<li className='menu-a' key={index}><Link to={lnk.LINK}>{lnk.NAME}</Link></li>)}
                            })}
                    </ul> 
                    {/*=========public======*/}
                    <div className='public'>
                        <div className='robot_pub '>
                            <img className='h-10' src="https://www.gifss.com/robot/images/gif-robot.gif" alt="robot" />
                            <span className='w-full h-full p-2 flex items-center'>{pub_val}</span>
                        </div>
                       
                    </div>
                    {/*=====search bar=======*/}
                    <button onClick={Open_phone_search} className=' phone_search '>
                        <img width="23px"  src={srch} alt="o\" />
                    </button>
                    <Phone_search />
                     <div className='search_nav1'>
                      <Nav_search />
                    </div>
                    {/*list right btn*/}
                   <div className='flexcenter gap-5' >
                    <Link to="/sign" className='nav-btn max-sm:hidden'><img width="20px" src={user} alt="user" /></Link>
                    <button  className='nav-btn max-sm:hidden'><img width="20px" src={heart} alt="heart" /></button>
                    <div className='relative'>
                        <span className='shopnum'>{shop_num}</span>
                        <button onClick={openclose_shop} className='nav-btn'><img className=' w-[20px] max-xsm:w-[18px]' src={shop} alt="shopping" /></button>
                    </div>
                   </div>
                    
            </nav>
            {/*==========second nav==============*/}
            <nav className='second-nav'>
                <div className='flexbetween gap-16'>
                    {/*=======side bar=============*/}
                    <button onClick={Openside} className='hover:scale-110 hover:-translate-y-[2px]'>
                        <img src={menu} alt="showbar" />
                    </button>
                    {/*============list ==================*/}
                    <ul className='flexcenter gap-4 text-white font-semibold relative '>
                        <li className=' menu-a max-lmd:hidden'><button>Donation</button></li>
                        <li className='menu-a max-lmd:hidden' ><Link to="#">lastes new</Link></li>
                        <li className='menu-a'><Link to="#" >customer services</Link></li>
                        <li className='flexcenter menu-a'><Link to="#">products</Link><img src={down} alt="v" /></li>
                    </ul>
                    <div className='time'>
                        <span className='test_connection'>loading</span>
                        <span className='time_form'></span>
                    </div>
                </div>

                {/*=====search bar=======*/}
                   <div className='search_block'>
                       <Search_bar />
                    </div>
                   
            </nav>
           
    </header>
  )
}

export default Header;