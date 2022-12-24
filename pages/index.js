import Image from 'next/image'
import Link from 'next/link'
import Foot from '../components/Foot'
import HomeNav from '../components/HomeNav'
import bg from '../public/teach.jpg'

export default function Home() {

  return (
    <div className='w-ful'>
      <HomeNav />
      <section className='hero-section w-full h-screen mt-10 relative' style={{backgroundImage:
    `linear-gradient(90deg,rgba(30,64,175, 1) 10%, rgba(245, 246, 252, 0.52) 100%),
    url(${bg.src})`}}>
        <div className='absolute sm:top-36 sm:left-52 max-w-md p-3 top-10 '>
          <h1 className='text-white text-5xl'>Kho tài liệu Vật lí Đại cương</h1>
          <p className='text-white mt-5 '>Physic Theory là dự án của STG về lĩnh vực giáo dục, nơi đây cung cấp cho bạn những kiến thức tổng quan về môn Vật lí ở bậc đại học.</p>
          <button className='sm:w-2/4 w-full mt-5 rounded-md block text-heavy-blue bg-orange px-5 py-2 text-lg font-medium transition ease-in-out delay-150 hover:translate-x-1 hover:scale-105 '><a href='#document'>Khám phá ngay <Image src='/arrow.svg' width={30} height={30} className='inline' alt='arrow'></Image></a></button>
        </div>
      </section>
      <section id='introduction' className='bg-white w-full py-10'>
          <h2 className='text-4xl text-heavy-blue text-center w-full my-10 font-semibold'>Vật lí không còn là cơn ác mộng</h2>
          <div className='flex-col flex sm:grid sm:grid-cols-3 m-auto gap-4 max-w-3xl ltsm:items-center'>
            <div className='ltsm:w-4/5 card flex flex-col p-10 items-center gap-2'>
              <Image src='/head.svg' width={50} height={50} alt='head'></Image>
              <h4 className='text-2xl font-medium text-center'>Dễ tiếp thu</h4>
              <p className='text-center'>Kiến thức được trình bày dễ hiểu trực quan.</p>
            </div>
            <div className='ltsm:w-4/5 card flex flex-col p-10 items-center gap-2'>
              <Image src='/rocket.svg' width={50} height={50} alt='rocket'></Image>
              <h4 className='text-2xl font-medium text-center'>Cập nhật thường xuyên</h4>
              <p className='text-center'>Bài học, tài liệu được các giáo sư Vật Lí liên tục bổ sung.</p>
            </div>
            <div className='ltsm:w-4/5 card flex flex-col p-10 items-center gap-2'>
              <Image src='/thumbup.svg' width={50} height={50} alt='thumbup'></Image>
              <h4 className='text-2xl font-medium text-center'>Hoàn toàn miễn phí</h4>
              <p className='text-center'>Không cần tài khoản, không gói VIP Pro, ai cũng được chào đón.</p>
            </div>
          </div>
      </section>
      <section id='document' className='bg-blue w-full py-10'>
        <h2 className='text-4xl text-white text-center w-full my-10 font-semibold'>Tài nguyên</h2>
        <div className='ltsm:flex-col flex m-auto gap-4 max-w-3xl justify-center items-center'>
            <Link href='/dien' className='ltsm:w-3/4 card flex flex-col p-10 items-center gap-2 max-w-xs sm:w-1/3 rounded-md hover:bg-orange hover:text-white hover:scale-105 delay-75'>
              <Image src='/electric.svg' width={50} height={50} alt='electric'></Image>
              <h4 className='text-2xl font-medium'>Điện</h4>
            </Link>
            <Link href='/tu'className='ltsm:w-3/4 card flex flex-col p-10 items-center gap-2 max-w-xs sm:w-1/3 rounded-md hover:bg-orange hover:text-white hover:scale-105 delay-75'>
              <Image src='/magnet.svg' width={50} height={50} alt='magnet'></Image>
              <h4 className='text-2xl font-medium'>Từ</h4>
            </Link>
            <Link href='/lab'className='ltsm:w-3/4 card flex flex-col p-10 items-center gap-2 max-w-xs sm:w-1/3 rounded-md hover:bg-orange hover:text-white hover:scale-105 delay-75'>
              <Image src='/computer.svg' width={50} height={50} alt='computer'></Image>
              <h4 className='text-2xl font-medium'>Thí nghiệm ảo</h4>
            </Link>
          </div>
      </section>
      <Foot />
    </div>
  )
}
