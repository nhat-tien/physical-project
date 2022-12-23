import Layout from "../../components/Layout";
import Link from "next/link";

export default function Tu() {
    return (
        <Layout>
             <main className="w-3/5 px-5 mx-auto ltsm:w-full min-h-screen">
            <h1 className="text-4xl font-medium text-center">Lý Thuyết phần từ</h1>
            <div className='border-2 w-40 mx-auto my-5'></div>
                <h3 className="text-3xl ">Từ trường, cảm ứng điện từ</h3>
                <ul className="list-disc ml-5">
                    <li className="my-3"><Link href='tu/tu-truong-cam-ung-dien-tu/dinh-luat-ampere' className="hover:border-blue hover:text-blue p-1 border-2 border-transparent">Tương tác từ định luật Ampère</Link></li>
                </ul>
                <h3 className="text-3xl ">Tài liệu thêm</h3>
                <ul className="list-disc ml-5">
                    <li className="my-3"><Link href='tu/tai-lieu-them/tom-tat' className="hover:border-blue hover:text-blue p-1 border-2 border-transparent">Tóm tắt công thức</Link></li>
                </ul>
        </main>
        </Layout>
    )
}