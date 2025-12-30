import React from "react";

interface ViralSongsCardProps2 {
  songName: string;
  artistName: string;
  image: string;
  rotation: number;
  bgColor?: string;
  simple?: boolean;
  classes?: string;
  isLimited?: boolean;
}

const ViralSongsCard2 = ({
  songName,
  artistName,
  image,
  rotation,
  bgColor = "var(--Green)",
  simple,
  classes,
  isLimited
}: ViralSongsCardProps2) => {
  return (
    <div
      className={`font-khand text-Dark border-Dark relative max-w-80 lg:max-w-100 scale-105 md:scale-100 overflow-hidden px-4 py-8 text-center font-bold tracking-tighter border bg-Purple`}
      style={{
        transform: `rotate(${rotation || 0}deg)`,
      }}
    >
      
        {/* image section */}
      <div className={`relative w-full top-0 right-0 left-0 h-full`}>
        <img src={image} alt="" className="w[90%] md:w-[30vw] lg:w-[20vw]" loading="lazy" />
      </div>

      <div className="absolute top-0 flex w-full h-full items-end justify-start  ">
        <div
          className={`w-full py-4`}
        >
          
          <div className="top-0 flex w-full h-full items-end justify-start  ">
              <div className={`w-full bg-Purple`} >

          <div className="overflow-hidden ">
          <div className="h-full text-left leading-none uppercase overflow-hidden text-Dark">
            <span className="font-black tracking-[-0.02em] text-[3rem] md:text-[3rem] lg:text-[4rem] whitespace-nowrap line--1 overflow-hidden">
              {songName}
            </span>
          </div>

          <div
            className=" text-left leading-none uppercase line-clamp-1 overflow-hidden text-Dark">
            <span className="text-[1rem] font-extrabold sm:text-[1rem] md:text-[2rem] lg:text-[2rem] line-clamp-1 overflow-hidden">
              BY {artistName}
            </span>
          </div>
        
          </div>
        </div>
       </div>
        </div>
      </div>
    </div>
  );
};

export default ViralSongsCard2;
