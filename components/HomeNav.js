import Link from 'next/link'
import Image from 'next/image'

export default function HomeNav() {
return (
    <div className="w-screen shadow-sm py-3 px-1.5 fixed top-0 bg-white z-30">
      <nav className='flex justify-between mx-auto w-4/5 items-center'>
        <Image src='/vercel.svg' width={100} height={100}></Image>
        <ul className='flex items-center font-medium'>
          <li className='py-1 px-4 text-lg block rounded-full hover:text-white hover:bg-blue transition-colors'><Link href='/About'>About</Link></li>
          <li className='py-1 px-4 text-lg block rounded-full hover:text-white hover:bg-blue transition-colors'><Link href='#content'>Content</Link></li>
        </ul>
      </nav>
    </div>
)
}