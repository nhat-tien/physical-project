import Image from 'next/image'
import Link from 'next/link'

export default function Foot() {
    return (
    <div className='bg-heavy-blue p-5 relative bottom-0'>
        <div className='ltsm:flex-col ltsm:items-center flex w-4/5 mx-auto justify-center gap-10 max-w-lg'>
            <Link className='self-center' href='/About'><Image src='/companylogo_dark.png' width={100} height={100} alt='company logo'></Image></Link>
            <Link href='/About'><h5 className='text-white text-md uppercase'>Về chúng tôi</h5></Link>
            <div className='flex-col flex gap-5 ltsm:items-center'>
                <h5 className='text-white text-md uppercase'>Lý thuyết vật lí đại cương</h5>
                <Link className='text-white text-sm' href='/dien'>Phần điện</Link>
                <Link className='text-white text-sm' href='/tu'>Phần từ</Link>
                <Link className='text-white text-sm' href='/lab'>Phòng thí nghiệm ảo</Link>
            </div>
        </div>
        <p className='mx-auto text-center my-5'>Copyright@2022 by STG Co.Ltd</p>
    </div>
)
}