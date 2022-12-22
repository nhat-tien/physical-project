import Image from 'next/image'
import Link from 'next/link'

export default function Foot() {
    return (
    <div className='bg-heavy-blue p-5 relative bottom-0'>
        <div className='ltsm:flex-col ltsm:items-center flex justify-evenly gap-8 items-start'>
        <Link className='relative top-3' href='/about'><Image src='/company_darknew.png' width={150} height={100} alt='company logo'></Image></Link>
        <div className='flex flex-col gap-3 items-center'>
            <Link href='/about'><p className=' text-white text-lg underline underline-offset-2'>Về chúng tôi</p></Link>
            <Link href=''><p className=' text-white text-lg underline underline-offset-2'>Privacy Policy</p></Link>
            <Link href=''><p className=' text-white text-lg underline underline-offset-2'>Term of Service</p></Link>
        </div>
        <div>
                <h5 className='text-white text-xl text-center'>Follow us</h5>
                <ul className='flex flex-row gap-4'>
                    <li><Link href=''><Image src='/contact/facebook.svg' width={40} height={50} alt='facebook'></Image></Link></li>
                    <li><Link href='https://github.com/nhat-tien' target='_blank' rel="noreferrer"><Image src='/contact/github.svg' width={40} height={50} alt='github'></Image></Link></li>
                    <li><Link href=''><Image src='/contact/twitter.svg' width={40} height={50} alt='twitter'></Image></Link></li>
                    <li><Link href=''><Image src='/contact/linkedin.svg' width={40} height={50} alt='linkedin'></Image></Link></li>
                </ul>
        </div>
        </div>
        <p className='mx-auto text-center mt-5 text-white opacity-60'>Copyright © 2022 STG Co.Ltd</p>
        <p className='mx-auto text-center text-white opacity-60'>Made with 💖</p>
    </div>
)
}

//div className='ltsm:flex-col ltsm:items-center flex w-4/5 mx-auto justify-center gap-10 max-w-lg'>