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
                
            <p className="ltsm:text-2xl text-5xl italic font-noto-serif font-bold text-center">Câu chuyện của chúng tôi</p>
            <Image src='/companynew.png' width={300} height={300} alt='logo' className="ltsm:w-40 mx-auto my-10"></Image>
            <div className="ltsm:flex-col flex flex-row justify-center items-center w-full gap-10 my-10">
                <div className="max-w-md p-5">
                    <h3 className="text-4xl font-semibold">- Tầm nhìn -</h3>
                    <p className="text-xl">Trở thành biểu tượng niềm tin hàng đầu Đông Nam Á về sản phẩm phần mềm giáo dục và tri thức.</p>
                </div>
                <Image src='/about/vr.png' width={300} height={300} alt='vr'></Image>
            </div>
            <Image className="ltsm:hidden absolute right-0" src='/about/side-image1.png' width={200} height={300} alt='side image'></Image>
            <div className="ltsm:flex-col flex flex-row-reverse justify-center items-center w-full gap-10">
                <div className="max-w-md p-5">
                    <h3 className="text-4xl font-semibold">- Sứ mạng -</h3>
                    <p className="text-xl">Giải pháp công nghệ số cho nền giáo dục Việt Nam. Đưa cuộc cách mạng 4.0 vào trong giảng dạy và tiếp thu kiến thức.</p>
                </div>
                <Image src='/about/class.png' width={300} height={300} alt='vr'></Image>
            </div>
            <div className="ltsm:flex-col flex flex-row justify-center items-center w-full gap-10">
                <div className="max-w-md p-5">
                    <h3 className="text-4xl font-semibold">- Giá trị -</h3>
                    <p className="text-xl">Bất cứ ai cũng có quyền học hỏi, chúng tôi biết điều đó. Chúng tôi cung cấp nguồn trí thức có thể truy cập từ bất cứ nơi đâu có Internet.</p>
                </div>
                <Image src='/about/tech.png' width={300} height={300} alt='vr'></Image>
            </div>
            <Image className="ltsm:hidden absolute left-0" src='/about/side-image2.png' width={200} height={300} alt='side image'></Image>
            <div className="border-2 border-gray w-32 mx-auto my-10"></div>
            <p className="text-5xl font-noto-serif text-center">Nhân sự</p>
            <div className="flex flex-row">
                <div></div>
            </div>
        </main>
        </Layout>
    )
}