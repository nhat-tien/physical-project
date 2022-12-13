import Image from 'next/image'
import Foot from '../components/Foot'
import HomeNav from '../components/HomeNav'


export default function Home() {
  return (
    <div className='w-ful'>
      <HomeNav />
      <section className='hero-section w-full h-screen mt-10 relative'>
        <div className='absolute top-36 left-52 max-w-md p-2'>
          <h1 className='text-white text-5xl'>Lorem ipsum dolor sit amet, consectetur </h1>
          <p className='text-white mt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          <button className='mt-5 rounded-md block text-heavy-blue bg-orange px-5 py-2 text-lg font-medium transition ease-in-out delay-150 hover:translate-x-1 hover:scale-105 '><a href='#'>Khám phá ngay <Image src='/arrow.svg' width={30} height={30} className='inline'></Image></a></button>
        </div>
      </section>
      <section id='introduction' className=''>

      </section>
      <section id='Document'>

      </section>
      <Foot />
    </div>
  )
}
