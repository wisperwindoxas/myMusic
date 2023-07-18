'use client'

import { useAlbum } from '@/app/store'
import clsx from 'clsx'
import React, { FC} from 'react'



const MusicItems: FC = () => {
  const albums = useAlbum((state) => state.album)
  const idMusic = useAlbum((state) => state.idMusic)
  const id = useAlbum((state) => state.id)




  return <div className='w-full h-screen flex justify-center mt-40'>
    <div className=' flex w-[1200px] h-[600px]'>
      <div className='w-full '>
        <img className='object-cover w-full h-full rounded-2xl' src={albums[0].albumCover} alt="" />
      </div>
      <div className='w-full px-5'>
        <h2 className='text-white text-2xl text-center my-4'>Плейлист</h2>

        <div className='h-[90%] music_lists  overflow-y-auto'>
          {albums[0].items.map((item, index) => (
            
            <div onClick={() => idMusic(index)} key={item.musicName} 
            className={clsx('flex items-center w-full p-3 cursor-pointer mb-5 shadow-2xl',
              { ['border border-red rounded-md text-white bg-gray-500 px-2']: index === id}
            )}>
              <div className='flex'>
                <span className='text-2xl text-white px-5'>{index + 1}</span>
                <img className='w-10 rounded-[100%] object-cover' src={item.cover} alt="" />
              </div>
              <div className='flex w-[50%]  flex-col px-6'>
                <span className='text-1xl text-white'>{item.musicName}</span>
                <span className='text-1xl text-white'>{item.artist}</span>
              </div>
              <span>{}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
}

export default MusicItems