"use client"

import Link from "next/link";
import { useState } from "react"
import { usePathname } from 'next/navigation'

export default function NavBar() {
const pathname = usePathname();

const [isOpen, setIsOpen] = useState<boolean>(false)

function NavBarFn(){
  setIsOpen(!isOpen);
}

  return (
    <>
    {/* <div className={`fixed top-0 right-0 w-full h-screen overflow-hidden z-0`}> */}
    <button
    onClick={()=>{setIsOpen(false) }}
    className={`${isOpen? "backdrop-blur-2xl bg-white/10" : "backdrop-blur-none hidden"} transition-all duration-500 w-full h-screen fixed top-0 left-0 z-1000`}
    >
    </button>

       <div className={`min-w-full md:min-w-100 h-full bg-Dark fixed top-0 right-0 pt-32 pl-4 transition-all duration-500 flex flex-col z-1000 ${isOpen? "translate-x-0":"translate-x-[100vw]"}`}>
          <Link 
          href="/"   
          onClick={NavBarFn} 
          className={`${pathname === '/' ? "bg-Yellow text-Dark":"hover:bg-Yellow hover:text-Dark hover:border-Dark bg-Dark text-Yellow"} transition-all duration-300 border-t py-2 border- border-t-Yellow md:py-2 px-4 font-black leading-[1.2] tracking-[-0.01em] text-4xl md:text-5xl text-center uppercase`}
          >
            Home
          </Link>
          <Link 
          href="/#about-section" 
          onClick={NavBarFn} 
          className={`${pathname === '/songs' ? "bg-Yellow text-Dark":"hover:bg-Yellow hover:text-Dark hover:border-Dark bg-Dark text-Yellow"} transition-all duration-300 border-t py-2 border- border-t-Yellow md:py-2 px-4 font-black leading-[1.2] tracking-[-0.01em] text-4xl md:text-5xl text-center uppercase`}

          >
           About us
          </Link>
          <Link 
          href="/#services-section" 
          onClick={NavBarFn} 
          className={`${pathname === '/originals' ? "bg-Yellow text-Dark":"hover:bg-Yellow hover:text-Dark hover:border-Dark bg-Dark text-Yellow"} transition-all duration-300 border-t py-2 border- border-t-Yellow md:py-2 px-4 font-black leading-[1.2] tracking-[-0.01em] text-4xl md:text-5xl text-center uppercase`}

           >
            services
          </Link>
          <Link 
          href="/#form-section" 
          onClick={NavBarFn} 
          className={`${pathname === '#form-section' ? "bg-Yellow text-Dark":"hover:bg-Yellow hover:text-Dark hover:border-Dark bg-Dark text-Yellow"} transition-all duration-300 border-t py-2 border- border-t-Yellow md:py-2 px-4 font-black leading-[1.2] tracking-[-0.01em] text-4xl md:text-5xl text-center uppercase`}

          >
            contact
          </Link>
          <div className="absolute w-full flex flex-col items-center justify-center bottom-10 text-Yellow leading-[1.2] text-sm uppercase md:text-medium font-bold">
            <img src="/logo.svg" alt="dark icon" className="w-[30%]" />
            <p className="-translate-x-2">mashooriya | mashoor soon</p>
          </div>
       </div>

       <button 
       onClick={NavBarFn}
       className={`fixed top-10 right-10 h-12 w-12 cursor-pointer flex flex-col item-center justify-center gap-0.5 p-2 z-1000 `}
       >
          <div className={`bg-Yellow border border-Dark/70 h-1.5 transition-all duration-500 ${isOpen && "relative top-2.5 rotate-45"} `}></div>
          <div className={`bg-Yellow border border-Dark/70 h-1.5 transition-all duration-500 ${isOpen && "relative top-0.5 -rotate-45"} `}></div>
          <div className={`bg-Yellow border border-Dark/70 h-1.5 transition-all duration-500 ${isOpen && "opacity-0"} `}></div>
       </button>

    {/* </div> */}
    </>
  )
}