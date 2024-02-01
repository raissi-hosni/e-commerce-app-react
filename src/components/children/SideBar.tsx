import React,{useState,useEffect,useRef} from 'react'
import { close,dash,down,down2,up,prodct,latest,best ,
   game,technology,informatic,sport,setting,help,client } from '../../assets/Shareimg';
import { Link } from 'react-router-dom';

const SideBar = () => {
  const [user_name,setUser_name]=useState("hosni raissi");
  const [log_state,setLog_state]=useState("log out");
  const side_list=[
    {
      PIC:dash,
      NAME:"dashboard",
      LINK:"dashboard",
    },
    {PIC:best,NAME:"best sale", LINK:"best sale",},
    {PIC:latest,NAME:"latest news",LINK:"latest news",},
  ];
  /*==============open and close side bar=====*/
  const close_sidebar=useRef<HTMLDivElement>(null);
  const CloseSide=()=>{
    close_sidebar.current?.classList.remove( "left-0");
  }
  /*===========open products==========*/
  const downup=useRef<HTMLImageElement>(null);
  let product_type:(Element|null);
  useEffect(()=>{
    product_type=document.querySelector(".side_products");
  },[])
  let test_pr=true;
  const open_close_products=()=>{
      if(test_pr) {
        if(product_type){
           product_type.classList.add("flex");
          if (downup.current)downup.current.src=`${up}` }} 
      else {
        if(product_type) {
          product_type.classList.remove("flex");
          if (downup.current)downup.current.src=`${down2}`}}
      test_pr=!test_pr; 
  }
  return (
    <div ref={close_sidebar} className='side'>
    <div className='sidebar'>
        {/*======profile==========*/}
        <div className='profile'>
            <div className='user-account'>
                  <div className='user_picture'>
                    <img 
                     src="https://static.vecteezy.com/system/resources/thumbnails/009/383/461/small/man-face-clipart-design-illustration-free-png.png" alt="usre" 
                     className='w-[90%] h-[90%]  bg-[grey]  rounded-full'/>
                  </div>
                  <span>{user_name}</span>
                  <span>{log_state}</span>
            </div>
           <div className='pr-2 pt-4 w-[18%]'>
            <button onClick={CloseSide} className='hover:rotate-90 hover:scale-110'>
              <img width="40px" src={close} alt="X" />
              </button>
           </div>
        </div>

        {/*===================links==========================*/}
       <div className='flex flex-col gap-2'>
          <ul className='flex flex-col gap-2'>
           {side_list.map((links,index)=>{
            let lnk=`http://localhost:5173/${links.LINK}`;
            return(<li className='side_element'>
              <img width="20px" src={links.PIC} alt={links.NAME} />
              <Link to={lnk}>{links.NAME}</Link>
              </li>
             )
          })}
          </ul>
          <hr className='border-[#252525] mx-1' />
          {/*=============products=================*/}
          <div className=' side_element flex-col w-full '>
              <span onClick={open_close_products} className='flex items-center gap-1 '><img width="20px" src={prodct} alt="product" />products <img ref={downup} src={down2} alt="downup" /></span>
              {/*===list products types=========*/}
              <div className='side_products'>
                <div className='flex items-center'>
                  <span className='border-b-[0.5px] border-[#454444] h-0 w-6'></span>
                  <div className='flex side_element'><img width="15px" src={informatic} alt="info" /><Link to="/#">informatic</Link></div>
                </div>
                <div className='flex items-center'>
                  <span className='border-b-[0.5px] border-[#454444] h-0 w-6'></span>
                  <div className='flex side_element'><img width="15px" src={sport} alt="sport" /><Link className='side_element' to="/#">sports</Link></div>
                </div>
                <div className='flex items-center'>
                  <span className='border-b-[0.5px] border-[#454444] h-0 w-6'></span>
                  <div className='flex side_element'><img width="15px" src={technology} alt="technology" /><Link className='side_element' to="/#">technology</Link></div>
                </div>
                <div className='flex items-center'>
                  <span className='border-b-[0.5px] border-[#454444] h-0 w-6'></span>
                  <div className='flex side_element'><img width="15px" src={game} alt="game" /><Link className='side_element' to="/#">video game</Link></div>
                </div>
              </div>
          </div>
       </div>
       {/*============others links====*/}
       <div className='flex flex-col gap-2'>
       <hr className='border-[#252525] mx-1' />
       <span className='side_element'><img width="20px" src={help}alt="help" /><Link to="/help">help</Link></span>
       <span className='side_element'><img width="20px" src={client} alt="client" /> <Link to="/client">service client</Link></span>
        <span className='side_element'><img width="20px" src={setting} alt="setting" /> <Link to="/setting">setting</Link></span>
       </div>
    </div>
    {/*====right side==============*/}
    <div onClick={CloseSide} className='side-window'> </div>
    </div>
  )
}
export default SideBar