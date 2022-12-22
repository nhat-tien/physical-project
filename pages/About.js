import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";


export default function About() {

    return (
        <Layout>
        <main className="mt-5 w-full">
            <Image src='/about/earth.jpg' width={1200} height={1200} alt='earth' className="w-full"></Image> 
            <div className="ltsm:top-20 absolute top-32 grid place-content-center w-screen">
                <div>
                    <h1 className="ltsm:text-3xl text-7xl text-center font-josefin text-white">ABOUT US</h1>
                    <p className="ltsm:text-base ltsm:mt-2 font-noto-serif text-4xl max-w-3xl mx-auto text-white mt-10">&quot;Ước mơ được xây dựng từ con số 0...&quot;</p>
                </div>
            </div>
            <div className="border-2 border-gray w-20 mx-auto my-10"></div>
                
            <p className="text-3xl italic font-noto-serif font-bold text-center">Câu chuyện của chúng tôi</p>
            <Image src='/companynew.png' width={500} height={300} alt='logo' className="mx-auto my-5"></Image>
            <div className="ltsm:flex-col flex flex-row justify-center items-center w-full gap-10 my-10">
                <div className="max-w-md p-5">
                    <h3 className="text-4xl font-semibold">- Tầm nhìn -</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <Image src='/about/vr.png' width={300} height={300} alt='vr'></Image>
            </div>
            <div className="ltsm:flex-col flex flex-row-reverse justify-center items-center w-full gap-10">
                <div className="max-w-md p-5">
                    <h3 className="text-4xl font-semibold">- Sứ mạng -</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <Image src='/about/class.png' width={300} height={300} alt='vr'></Image>
            </div>
            <div className="ltsm:flex-col flex flex-row justify-center items-center w-full gap-10">
                <div className="max-w-md p-5">
                    <h3 className="text-4xl font-semibold">- Giá trị -</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                </div>
                <Image src='/about/tech.png' width={300} height={300} alt='vr'></Image>
            </div>
            <div className="border-2 border-gray w-32 mx-auto my-10"></div>
            <p className="text-5xl font-noto-serif text-center">Nhân sự</p>
        </main>
        </Layout>
    )
}