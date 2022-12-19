import Link from "next/link";
import Layout from "../components/Layout";
import Image from "next/image";


export default function About() {

    return (
        <Layout>
        <main className="px-10 w-full">
        <Image src='/companylogo.png' className="mx-auto" width={400} height={200} alt='logo cong ty'></Image>
        <p className="text-left font-noto-serif text-4xl font-semibold italic">"Thành trì vĩ đại</p> 
        <p className="text-left font-noto-serif text-2xl italic">được xây nên từ</p> 
        <p className="text-left font-noto-serif text-4xl font-semibold italic">một viên gạch nhỏ đầu tiên..."</p>
        </main>
        </Layout>
    )
}