import Image from 'next/image'
import Foot from '../components/Foot'
import HomeNav from '../components/HomeNav'


export default function Home() {
  return (
    <div className='w-ful'>
      <HomeNav />
      <section className='hero-section w-full h-screen mt-10 relative'>
        <div className='absolute sm:top-36 sm:left-52 max-w-md p-3 top-10 '>
          <h1 className='text-white text-5xl'>Lorem ipsum dolor sit amet, consectetur </h1>
          <p className='text-white mt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiursmod tempo incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
          <button className='sm:w-2/4 w-full mt-5 rounded-md block text-heavy-blue bg-orange px-5 py-2 text-lg font-medium transition ease-in-out delay-150 hover:translate-x-1 hover:scale-105 '><a href='#'>Khám phá ngay <Image src='/arrow.svg' width={30} height={30} className='inline'></Image></a></button>
        </div>
      </section>
      <section id='introduction' className='bg-white w-full py-10'>
          <h2 className='text-4xl text-heavy-blue text-center w-full my-10 font-semibold'>Vật lí không còn là cơn ác mộng</h2>
          <div className='ltsm:flex-col flex m-auto gap-4 max-w-3xl justify-center items-center'>
            <div className='ltsm:w-4/5 card flex flex-col p-10 items-center gap-2 hover:bg-orange hover:text-white hover:scale-105 transition-all delay-75'>
              <Image src='/head.svg' width={50} height={50}></Image>
              <h4 className='text-2xl font-medium'>Alo alo alo</h4>
              <p>dolor sit amet, consectetur adipiscing elit, sed do eiursmod tempo</p>
            </div>
            <div className='ltsm:w-4/5 card flex flex-col p-10 items-center gap-2 hover:bg-orange hover:text-white hover:scale-105 transition-all delay-75'>
            <Image src='/rocket.svg' width={50} height={50}></Image>
            <h4 className='text-2xl font-medium'>Alo alo alo</h4>
              <p>dolor sit amet, consectetur adipiscing elit, sed do eiursmod tempo</p>
            </div>
            <div className='ltsm:w-4/5 card flex flex-col p-10 items-center gap-2 hover:bg-orange hover:text-white hover:scale-105 transition-all delay-75'>
            <Image src='/thumbup.svg' width={50} height={50}></Image>
            <h4 className='text-2xl font-medium'>Alo alo alo</h4>
              <p>dolor sit amet, consectetur adipiscing elit, sed do eiursmod tempo</p>
            </div>
          </div>
      </section>
      <section id='Document'>

      </section>
      <Foot />
    </div>
  )
}
