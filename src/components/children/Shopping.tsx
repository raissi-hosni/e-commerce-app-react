import React from 'react'

const Shopping = () => {
  return (
    <div className='shopping'>
      {/*======products======*/}
        <div className='flexcenter flex-col w-[60%] max-lg:w-full'>
           <div className='products'>
              <table className=' shop_tab w-[470px] max-lg:w-full '>
               
              </table>
           </div>
           <div className='total_price'>
            <span className='text-lg font-semibold'>Total Ammount :$ </span>
            <span className='cal_price'>00</span>
           </div>
        </div>
       {/*======checkout======*/}
        <div className='flexcenter p-5 gap-2 flex-col w-[40%] max-lg:w-full'>
           <div className='w-full flexcenter flex-col gap-2'>
                  <input className='shop_inp' type="text" placeholder='your Full name' />
                  <input className='shop_inp' type="text" placeholder='your number' />
                  <input className='shop_inp' type="text" placeholder='your city' />
                  <input className='shop_inp' type="text" placeholder='your address' />
           </div>
           <div className='w-full flexcenter gap-2'>
              <button className='liv_btn'>checkout</button>
              <button className='online_btn'>payment</button>
           </div>
        </div>
    </div>
  )
}

export default Shopping