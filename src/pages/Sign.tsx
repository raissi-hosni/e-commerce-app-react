import {useRef,useState} from 'react'
import axios from 'axios';
const Sign = () => {
    const sigup=useRef<HTMLFormElement>(null);
    const sigin=useRef<HTMLFormElement>(null);
   
    const [username,setUsername]=useState<string>("");
    const [useremail,setUseremail]=useState<string>("");
    const [userpassword,setUpassword]=useState<string>("");

    const setname=(nam:string)=>{
      setUsername(nam);
    }
    const setemail=(eml:string)=>{
      setUseremail(eml)
    }
    const setpassword=(pass:string)=>{
      setUpassword(pass)
    }
    // server connect data
    const hundlesubmit =(e:React.FormEvent<HTMLFormElement>)=>{
      e.preventDefault()
      axios.post("http://localhost:8000/sign", { username, useremail, userpassword })
      .then(result =>console.log(result))
          .catch(err=>console.log(err))
    }


    const signin =()=>{
        if(sigup.current) sigup.current.classList.add("hidden");
        if(sigin.current) sigin.current.classList.remove("hidden");
    }
    const signup =()=>{
        if(sigin.current) sigin.current.classList.add("hidden");
        if(sigup.current) sigup.current.classList.remove("hidden");
    }
   
  return (
    <div  className='sign_block '> 
    
        {/*============logo==============*/}
        <span className=' logo '>
          Upmarketic<b className='text-orange-600 text-[30px] max-sm:text-[20px]'>.</b>
        </span>
      
      <div className='sign'>
         
        {/*============sign up==========*/}
        <form ref={sigup} action="POST" className='signup' onSubmit={hundlesubmit}>
            <span className='text-3xl font-bold max-m:text-2xl'>create account</span>
           <div className='flex justify-center flex-col gap-1'>
            <label  className="labl" htmlFor="user_name ">your name</label>
            <input onChange={(e)=>{setname(e.target.value)}} className='inp' type="text" name='user_name' id='user_name' placeholder='full name' />
           </div>

           <div className='flex justify-center flex-col gap-1'>
            <label className="labl" htmlFor="user_email ">phone number or e-mail</label>
            <input onChange={(e)=>{setemail(e.target.value)}} className='inp' type="email" name='user_email' id='user_email' />
           </div>

           <div className='flex justify-center flex-col gap-1'>
            <label className="labl" htmlFor="user_password ">password</label>
            <input onChange={(e)=>{setpassword(e.target.value)}}  className='inp' type="password" name='user_password' id='user_password' placeholder='at least 6 characters'/>
           </div>
           <div className='flex justify-center flex-col gap-1'>
           <label className="labl" htmlFor="user_password2">enter again the password</label>
             <input className='inp' type="password" name='user_password2'id='user_password2' placeholder='password' />
           </div>
           <button type='submit'  className='p-2 flexcenter text-lg bg-orange-600 rounded-lg hover:text-white'>sign up</button>
           <p className='text-[13px] mt-3'>Welcome to our e-commerce platform! Ready to dive into a world of shopping convenience? Simply fill out
             the form below to get started. Already part of the family? <i className='text-blue-700'>Just log in above</i>. We can't wait to have you join
              our community of savvy shoppers!</p>
           <span className='text-sm font-bold my-4'>You already have an account? <span onClick={signin} className='text-blue-500 cursor-pointer hover:underline'>Log in</span></span>
        </form>
        {/*=============sign in ===========*/}
        <form ref={sigin} action="POST" className='signin hidden '>
         <span className='text-3xl font-bold max-m:text-2xl'>sign in</span>
            <div className='flex justify-center flex-col gap-1'>
                <label className="labl" htmlFor="user_email ">phone number or e-mail</label>
                <input className='inp' type="email" name='user_email' id='user_email' />
            </div>

            <div className='flex justify-center flex-col gap-1'>
                <label className="labl" htmlFor="user_password ">password</label>
                <input  className='inp' type="password" name='user_password' id='user_password' placeholder='at least 6 characters'/>
            </div>
            <button className='p-2 flexcenter text-lg bg-orange-600 rounded-lg hover:text-white'>sign in</button>
            <p className='text-[13px] mt-3'>Welcome back! Sign in to continue shopping with ease.If you don't have an account yet, sign up now to unlock exclusive
                 deals and a seamless shopping experience!</p>
                 <div className='w-full flexcenter flex-col gap-2 p-2 mt-2'>
                    <p className='text-sm text-[#5c5b5b] underline'>New to upmarketic?</p>
                    <span onClick={signup} className='text-lg font-medium cursor-pointer text-[#232323] hover:scale-105'> create new account</span>
                 </div>
        </form>
      </div>
    </div>
  )
}

export default Sign