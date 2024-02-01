import {useState} from 'react';
const Special_deal = () => {
    const [day,setDay]=useState('00');
    const [hour,setHour]=useState('00');
    const [minute,setMinute]=useState('00');
    const [second,setSecond]=useState('00');
  return (
    <section className='section mt-8'>
    <span className="main_title">spacial <b className='text-orange-500 uppercase'>deal</b></span>
    <div className="section_block max-sm:p-0">
        <div className='special_deal'>
            <img
            src="https://www.pngall.com/wp-content/uploads/5/Hard-Disk-Drive-PNG-Free-Download.png" alt="hard-disk-driver" 
            className='w-[50%] max-lmd:h-60 max-lmd:w-auto max-sm:h-48 max-xsm:h-44 max-m:h-36'/>
            <div className='w-[50%] h-full flexcenter flex-col gap-8 max-sm:gap-5'>
                <span className='text-2xl max-lmd:text-xl max-xsm:text-sm font-bold text-orange-500'>Upto 50% Off</span>
                <span className='text-4xl max-lmd:text-2xl max-sm:text-lg font-bold'>Deal Of The Day</span>
                <div className='flexcenter gap-4 max-xm:gap-2'>
                    <div className='flexcenter flex-col'>
                        <span className='text-4xl max-lmd:text-2xl text-orange-500 font-bold'>{day}</span><span className='text-lg max-lmd:text-sm text-[#777575]'>days</span>
                    </div>
                    <div className='flexcenter flex-col'>
                        <span  className='text-4xl max-lmd:text-2xl text-orange-500 font-bold'>{hour}</span><span className='text-lg max-lmd:text-sm text-[#777575]'>hours</span>
                    </div>
                    <div className='flexcenter flex-col'>
                        <span className='text-4xl max-lmd:text-2xl text-orange-500 font-bold'>{minute}</span><span className='text-lg max-lmd:text-sm text-[#777575]'>minutes</span>
                    </div>
                    <div className='flexcenter flex-col'>
                        <span className='text-4xl max-lmd:text-2xl text-orange-500 font-bold'>{second}</span><span className='text-lg max-lmd:text-sm text-[#777575]'>seconds</span>
                    </div>
                </div>
                <button className='about_btn'>shop now</button>
            </div>
        </div>
    </div>
    </section>
  )
}

export default Special_deal