import React from 'react'
import reactsvg from '../assets/react.svg'
function ContactUs() {
    return (
        <>
            <div className='flex items-center justify-between w-7/12 m-auto  pt-3 pb-4'>

                <div className="first_Section">
                    <img src={reactsvg} alt="" />
                </div>
                <div className="Second_Section">
                    <ul className='flex gap-4'>
                        {/* <li><a href="#" className='uppercase font-medium'>menu</a> </li>
                        <li><a href="#" className='uppercase font-medium'>location</a> </li>
                        <li><a href="#" className='uppercase font-medium'>about</a> </li> */}
                        <li><a href="#" className='uppercase font-medium text-cyan-500'>contact</a> </li>
                    </ul>
                </div>
                <div className="Third_Section">
                    <button className='btn bg-red-700 text-white px-4 py-1 capitalize'>login</button>
                </div>
            </div>
            <div className='w-7/12 m-auto pt-8'>

                <h1 className=' font-extrabold  text-5xl pt-7'>CONTACT US</h1>
                <p className=' font-semibold text-gray-500 pt-6 pb-8    '>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
                <div>
                    <button>📰VIA SUPPORT CHAT</button>
                    <button> 📞VIA CALL</button>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default ContactUs