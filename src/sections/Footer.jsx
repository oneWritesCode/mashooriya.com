import React from 'react'

const Footer = ({ id }) => {
  return (
    <div id={id} className='w-full bg-Dark flex justify-end py-20 md:py-0 flex-col'>


      <div className="flex w-full items-center justify-center uppercase pb-30">
        <div className="text-Yellow font-bold flex items-start min-w-[90%] justify-between">
          <div>
            <div>
              <h2 className="text-[2rem] line-clamp-1 leading-none">contact</h2>
              <p className="text-[5rem] line-clamp-1 leading-none underline">WE@MASHOORIYA.COM</p>
            </div>
            <div>
              <h2 className="text-[2rem] line-clamp-1 leading-none pt-10">QUICK LINKS</h2>
              <p className="text-[3rem] line-clamp-1 leading-none underline">masooriya originals</p>
              <p className="text-[3rem] line-clamp-1 leading-none underline">service</p>
              <p className="text-[3rem] line-clamp-1 leading-none underline">hit list</p>
            </div>
          </div>

          <div>
            <h2 className="text-[2rem] line-clamp-1 leading-none text-right">contact</h2>
            <p className="text-[5rem] line-clamp-1 leading-none underline">WE@MASHOORIYA.COM</p>

          </div>
        </div>
      </div>

      <div className="text-Yellow  border-white w-full flex items-center pb-8 justify-center">
        <img src="./team zeroone made this!.png" className="" alt="" />
      </div>

      <div className=''>
        <img src="./mash0oriya.png" className="w-full" alt="" />
      </div>
      {/* <div className='flex w-full bottom-5 px-[2.2rem]  md:pb-8 font-bold text-2xl md:text-5xl flex-col gap-4 md:flex-row'>
        <div className='w-full md:w-[40%] flex justify-between gap-4 md:gap-0' >
          <a href="./">INSTAGRAM</a>
          <a href="./">TWITTER</a>
        </div>
        <div className='w-full md:w-[60%] flex md:justify-end'>
          <a href="">LINKEDIN</a>
        </div>
      </div> */}
    </div>
  )
}

export default Footer;