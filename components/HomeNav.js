import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function HomeNav() {
const [display, setDisplay ] = useState(false);

const handleToggle = () => {
  setDisplay(!display);
}

return (
  <>
    <div className="w-screen shadow-sm py-3 px-1.5 fixed top-0 bg-white z-30">
      <nav className='flex justify-between mx-auto w-4/5 items-center'>
        <Image src='/vercel.svg' width={100} height={100}></Image>
        <button onClick={handleToggle} className='sm:hidden'><Image src={display ? '/close.svg' : '/menu.svg'} width={30} height={30}></Image></button>
        <ul className='sm:flex items-center font-medium hidden'>
          <li className='py-1 px-4 text-lg block rounded-full hover:text-white hover:bg-blue transition-colors'><Link href='/About'>About</Link></li>
          <li className='py-1 px-4 text-lg block rounded-full hover:text-white hover:bg-blue transition-colors'><a href='#document' onClick={handleToggle}>Content</a></li>
        </ul>
      </nav>
    </div>
      <div className={`sm:hidden transition-all delay-75 fixed top-11 left-0 w-2/3 h-screen bg-white z-20 py-5 ${!display ? '-translate-x-full opacity-0' : ''}`}>
      <ul className='flex flex-col items-center font-medium'>
          <li className='my-5 py-1 px-4 text-lg block rounded-full hover:text-white hover:bg-blue transition-colors'><Link href='/About'>About</Link></li>
          <li className='my-5 py-1 px-4 text-lg block rounded-full hover:text-white hover:bg-blue transition-colors'><a href='#document' onClick={handleToggle}>Content</a></li>
        </ul>
      </div>
    </>
)
}