'use client'

import {useState,useEffect } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import { IMusic } from './music.interface';
import { useAlbum } from '@/app/store';

const Player = () => {
  const album = useAlbum((state)  => state.album)
  const id = useAlbum((state)  => state.id)
  const idMusic = useAlbum((state) => state.idMusic)

  const [currentMusic, setCurrentMusic] = useState(0)
	const [isPlay, setIsPlay] = useState(album[0].items[currentMusic]);
    
  console.log(currentMusic, id);
  

	useEffect( ()  => {
       
    setIsPlay(album[0].items[currentMusic])
    idMusic(currentMusic)
},[currentMusic, album,id])	
  

	
	 const  handleClickPrevious = (): void => {
      setCurrentMusic((prevState: number) => 
          prevState === 0
            ? album[0].items.length - 1
            : prevState - 1,
      );
   
    };



	const handleClickNext = (): void => {    
    setCurrentMusic((prevState: number) => 
		 prevState < album[0].items.length - 1 
     ? prevState + 1 
     : 0,
	)
  
  };


        



  return <AudioPlayer 
        header={`${isPlay.artist}, ${isPlay.musicName} `}
        showSkipControls 
        src={isPlay.path} 
        onClickPrevious={handleClickPrevious}
        onClickNext={handleClickNext}
        autoPlay={false}
  
   />
}

export default Player