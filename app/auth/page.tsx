import { FC } from 'react'
import Image from 'next/image'
const Auth: FC = () => {
  return (
    <div className='auth h-[100vh] flex items-center justify-center bg-white'>
          <div className='w-[1400px] h-[70vh] border border-black rounded-xl flex'>
                <div className='w-[50%] h-[100%] border rounded-tl-xl rounded-bl-xl relative'>
                      <Image className='rounded-tl-xl rounded-bl-xl' src={'/image/Jalolidin.jpg'} fill alt=''/>
                </div>
                <div className='w-[50%] border rounded-tr-xl rounded-br-xl'>
                  
                </div>
          </div>
      </div>

  )

}

export default Auth