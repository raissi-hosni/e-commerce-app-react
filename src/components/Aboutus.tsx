import { deliv,service,money } from "../assets/Shareimg"
import { motion } from "framer-motion";

const Aboutus = () => {
  return (
    <section className='section mt-8'>
        <span className="main_pre_title">about us</span>
        <span className="main_title">WHY CHOOSE US?</span>
        <div className="section_block max-sm:p-0">
            <div className='aboutus'>
                {/*======image======*/}
                <div className='h-full w-[45%] max-lmd:w-[70%] max-lmd:h-auto  flexcenter '>
                    <img width="90%" src="https://www.pngplay.com/wp-content/uploads/6/Computer-Accessories-Free-PNG.png" alt="uproducts" />
                </div>
                <div className=' max-lmd:px-3 max-lmd:h-auto max-lmd:w-full flex justify-between flex-col gap-2 w-[55%] h-full py-5 pr-2' >
                   <span className='text-4xl max-lxmd:text-2xl font-bold text-blue-950'>Best products In The Country</span>
                   <p className=' w-full text-lg text-[#636060] font-sans max-xl:text-sm'>
                   Discover top-notch electronic products and accessories at
                    our store, featuring cutting-edge speaker kits, Bluetooth devices,
                     and more. Choose us for a seamless shopping experience with premium quality,
                      a diverse product range, expert support, and secure payment options.
                     Elevate your tech lifestyle with upmarketic. Shop with confidence today!
                   </p>
                   <div className=' w-full flexcenter gap-2 flex-wrap'>
                    <motion.div initial={{ opacity: 0,y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.2 }} className='about_ad'>
                      <img src={deliv} alt="livraison" />Free Delivery
                    </motion.div>
                    <motion.div initial={{ opacity: 0,y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.4 }} className='about_ad'>
                      <img src={money} alt="$" />Easy Payments
                    </motion.div>
                    <motion.div  initial={{ opacity: 0,y:10 }} whileInView={{ opacity: 1, y:0 }} transition={{ delay: 0.6 }} className='about_ad'>
                      <img src={service} alt="service" />24/7 Service
                    </motion.div>
                   </div>
                   <button className="about_btn">learn more</button>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Aboutus