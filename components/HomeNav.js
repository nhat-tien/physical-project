import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router';

export default function HomeNav() {
const [display, setDisplay ] = useState(false);
const [active, setActive] = useState(null);
const router = useRouter();
const route = router.route.split("/")[1];
useEffect(() => {
    setActive(route);
    console.log(1);
},[1])

const handleToggle = () => {
  setDisplay(!display);
}

return (
  <>
    <div className="w-screen shadow-sm py-3 px-1.5 fixed top-0 bg-white z-30">
      <nav className='flex justify-between mx-auto w-4/5 items-center'>
        <Link href='/'><Image src='/vercel.svg' width={100} height={100} alt='company logo'></Image></Link>
        <button onClick={handleToggle} className='sm:hidden'><Image src={display ? '/close.svg' : '/menu.svg'} width={30} height={30} alt='toggle'></Image></button>
        <ul className='sm:flex items-center font-medium hidden'>
          <li ><Link href='/' className={`${active == '' ? 'active' : 'hover:text-blue'} py-1 px-4 text-lg block rounded-full border-2 border-transparent hover:border-blue transition-colors`}>Trang chủ</Link></li>
          <li ><Link href='/dien' className={`${active == 'dien' ? 'active' : 'hover:text-blue'} py-1 px-4 text-lg block rounded-full border-2 border-transparent hover:border-blue transition-colors`}>Điện</Link></li>
          <li ><Link href='/tu' className={`${active == 'tu' ? 'active' : 'hover:text-blue'} py-1 px-4 text-lg block rounded-full border-2 border-transparent hover:border-blue transition-colors`}>Từ</Link></li>
          <li className={`${active == 'About' ? 'active' : 'hover:text-blue'} py-1 px-4 text-lg block rounded-full border-2 border-transparent hover:border-blue transition-colors`}><Link href='/About'>Về chúng tôi</Link></li>
        </ul>
      </nav>
    </div>
      <div className={`sm:hidden transition-all delay-75 fixed top-11 left-0 w-2/3 h-screen bg-white z-20 py-5 ${!display ? '-translate-x-full opacity-0' : ''}`}>
        <ul className='flex flex-col items-center font-medium'>
          <li ><Link href='/' className={`${active == '' ? 'active' : ' '} py-1 px-4 text-lg block rounded-full border-2 border-transparent transition-colors`}>Trang chủ</Link></li>
          <li ><Link href='/dien' className={`${active == 'dien' ? 'active' : ' '} py-1 px-4 text-lg block rounded-full border-2 border-transparent transition-colors`}>Điện</Link></li>
          <li ><Link href='/tu' className={`${active == 'tu' ? 'active' : ' '} py-1 px-4 text-lg block rounded-full border-2 border-transparent transition-colors`}>Từ</Link></li>
          <li ><Link href='/About' className={`${active == 'About' ? 'active' : ' '} py-1 px-4 text-lg block rounded-full border-2 border-transparent transition-colors`}>Về chúng tôi</Link></li>
        </ul>
      </div>
    {display && 
    <div className='w-screen h-screen bg-black-blur z-10 fixed sm:hidden'></div>
    }
    </>
)
}