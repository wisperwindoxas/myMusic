import { FC } from 'react'
import { FaGuitar } from 'react-icons/fa'
import { menu } from './navigation.data'
import Link from 'next/link'

const Navigator: FC = () => {
  return <div className='navigation w-[120px] h-[100vh] fixed left-0 top-[100px]'>
    <div className='flex flex-col items-center gap-4'>
      {menu.map((item) => {
        return (
          <Link href={item.link} className='w-full'>
            <div className='w-full p-3 flex flex-col items-center text-gray-500 justify-center hover:bg-[#ff1f74] hover:text-white'>
              {<item.icons className='text-2xl ' />}
              <span className='text-center'>{item.title}</span>
            </div>
          </Link>
        )
      })}
    </div>
  </div>
}

export default Navigator