import Link from "next/link";
import Layout from "../../components/Layout";

export default function Dien() {
    return (
        <Layout>
        <main className="w-3/5 px-5 mx-auto ltsm:w-full min-h-screen">
            <h1 className="text-4xl font-medium text-center">Lý Thuyết phần điện</h1>
            <div className='border-2 w-40 mx-auto my-5'></div>
                <h3 className="text-3xl ">Điện trường tĩnh</h3>
                <ul className="list-disc ml-5">
                    <li className="my-3"><Link href='dien/dien-truong-tinh/dinh-luat-coulomb' className="hover:border-blue hover:text-blue p-1 border-2 border-transparent">Định luật Coulomb</Link></li>
                    <li className="my-3"><Link href='dien/dien-truong-tinh/dien-truong-duong-suc-dien-truong' className="hover:border-blue hover:text-blue p-1 border-2 border-transparent">Điện trường - đường sức điện trường</Link></li>
                </ul>
                <h3 className="text-3xl ">Dòng điện không đổi</h3>
                <ul className="list-disc ml-5">
                    <li className="my-3"><Link href='dien/dong-dien-khong-doi/dai-cuong-dong-dien' className="hover:border-blue hover:text-blue p-1 border-2 border-transparent">Đại cương về dòng điện</Link></li>
                </ul>
                <h3 className="text-3xl ">Tài liệu thêm</h3>
                <ul className="list-disc ml-5">
                    <li className="my-3"><Link href='dien/tai-lieu-them/tom-tat' className="hover:border-blue hover:text-blue p-1 border-2 border-transparent">Tóm tắt công thức</Link></li>
                </ul>
                <h3 className="text-3xl ">Video</h3>
                <ul className="list-disc ml-5">
                    <li className="my-3"><Link href='dien/bai-giang/video-dien-truong' className="hover:border-blue hover:text-blue p-1 border-2 border-transparent">Điện trường</Link></li>
                </ul>
        </main>
        </Layout>
    )
}