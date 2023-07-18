'use client'

import { FC } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation } from 'swiper/modules';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import { popularMusic } from './popular.music.data';
import Link from 'next/link';
import {useAlbum } from '@/app/store';


const Popular: FC = () => {

  const addAlbums = useAlbum((state) => state.addAlbums)
  const idMusic = useAlbum((state) => state.idMusic)


  const addAlbumHandler = (data:object) => {
    idMusic(0)
    addAlbums(data)
    
  }
   
  

  return <div className='w-full h-[250px] p-5'>
    <Swiper
      slidesPerView={4}
      spaceBetween={30}
      freeMode={true}
      navigation={true}
      modules={[FreeMode, Navigation]}
      className="mySwiper"
    >
      {popularMusic.map((item,index) =>
      (
      
        <SwiperSlide  className='relative' key={index} >
          <Link href={`/album/${item.albumName}`} onClick={() => addAlbumHandler(item)} >
          <img src={item.albumCover} alt="" />
          <div className='album_info absolute w-full h-full  top-0 left-0 rounded-2xl cursor-pointer'>
            <h2 className='text-white text-left p-6'>{item.albumName}</h2>
            <span className='text-white absolute bottom-5 left-5'>{item.items.length} Музыка</span>
          </div>
          </Link>
        </SwiperSlide>
       
      )
      )}
    </Swiper>
  </div>
}

export default Popular