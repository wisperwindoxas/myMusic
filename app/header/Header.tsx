import { FC } from 'react'
import {FcMusic} from 'react-icons/fc'
import {BiSearchAlt2} from 'react-icons/bi'
import Link from 'next/link'



const Header: FC = () => {
  return <div className='header w-full h-[100px] flex items-center  px-5 justify-between fixed top-0 left-0 z-50'>
    <header className='flex items-center'>
    {/* Logo start */}
          <div className="logo flex items-center mr-6">
                <FcMusic className='text-[32px]'/>
                <h2 className='font-bold text-2xl text-white'>My<span className='text-[#ff1f74]'>M</span>usic</h2>
          </div>
    {/* Logo end */}
    {/* Search start */}

      <div className='flex py-3 items-center  rounded-[40px] px-5 bg-[#2f3140]'>
          <BiSearchAlt2 className='text-[25px] text-white mr-3'/>
          <input 
          type="search"
           name="" 
           className="border-none outline-none w-[470px] bg-transparent text-[18px] text-white " 
           placeholder='Поиск Албом, Музыка, Жанры, Артист' />
      </div>

    {/* Search end */}
    </header>

    {/* Sigin start */}
       <Link href={'/auth'}>
          <button className='py-3 px-10 cursor-pointer rounded-[40px] bg-[#ff1f74] text-white'>Вход</button>
        </Link>
    {/* Sigin end */}

  </div>
}

export default Header