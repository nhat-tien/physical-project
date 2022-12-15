import Image from 'next/image'
import Link from 'next/link'

export default function Foot() {
    return (
    <div className='bg-heavy-blue p-10 relative bottom-0'>
        <div className='flex w-3/4 mx-auto justify-center gap-10'>
            <Link className='self-center' href=''><Image src='/vercel.svg' width={80} height={80}></Image></Link>
            <Link href='/About'><h5 className='text-white text-md uppercase'>Về chúng tôi</h5></Link>
            <div className='flex-col flex gap-5'>
                <h5 className='text-white text-md uppercase'>Lý thuyết vật lí đại cương</h5>
                <Link className='text-white text-sm' href='/dien'>Phần điện</Link>
                <Link className='text-white text-sm' href='/tu'>Phần từ</Link>
            </div>
        </div>
        <p className='mx-auto text-center my-8'>Copyright@2022 by STG Co.Ltd</p>
    </div>
)
}