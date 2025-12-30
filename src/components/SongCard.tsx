import { getPlaylistSongs } from "@/app/lib/spotify";
import ViralSongsCard from "../components/ViralSongsCard";
import ViralSongsCard2 from "../components/ViralSongsCard2";
import Viral from "@/sections/Viral";

type SongCardProps = {
  limit?: number;
  cardOnSong?:string;
  id?:string;
  noRotate?: boolean;
  classToApply?:string;
};

export default async function SongCard({ limit, cardOnSong  , id ,noRotate,classToApply}: SongCardProps) {
  const songs = await getPlaylistSongs("7vLaoL118tK1gksUM4ddje");

  // If limit exists, take only that many songs
  const visibleSongs = limit ? songs.slice(0, limit) : songs;

  if(!limit){
    return(
   <div className={`relative w-full flex items-center overflow-y-hidden [&::-webkit-scrollbar]:w-12 overflow-x-auto ${limit && "flex-wrap justify-center"} ${!limit && "pl-30 md:pl-50 lg:pl-110"} ${cardOnSong}`}>
      {visibleSongs.map((song: any, index:number) => {

        const rotation =  noRotate ? 0 : index === 0 ? 2 : index === 1 ? -2 : 1;
        const classes =  classToApply;
        const isLimited = limit
        return(
        <div key={song.id} style={{ marginBottom: 20 }} className=" ">
          <ViralSongsCard
            image={song.image}
            songName={song.name}
            artistName={song.artists}
            bgColor="var(--Purple)"
            rotation={rotation}
            simple={true}
            classes={classes}
            isLimited
            />
            </div>
        )
      })}
    </div>
    )
  }

  return (
    <div className={`relative w-full flex items-center overflow-y-hidden [&::-webkit-scrollbar]:w-12 overflow-x-auto ${limit && "flex-wrap justify-center"} ${!limit && "pl-30 md:pl-50 lg:pl-110"} ${cardOnSong} px-10`}>
      {visibleSongs.map((song: any, index:number) => {

        const rotation =  noRotate ? 0 : index === 0 ? 2 : index === 1 ? -2 : 1;
        const classes =  classToApply;
        const isLimited = limit
        return(
        <div key={song.id} style={{ marginBottom: 20 }} className=" ">
          <ViralSongsCard2
            image={song.image}
            songName={song.name}
            artistName={song.artists}
            bgColor="var(--Purple)"
            rotation={rotation}
            simple={true}
            classes={classes}
            isLimited
            />
            </div>
        )
      })}
    </div>
  );
}
