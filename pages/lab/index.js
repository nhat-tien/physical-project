import Image from "next/image";
import Link from "next/link";
import Layout from "../../components/Layout";

export default function Dien() {
    return (
        <Layout>
        <main className="w-3/5 px-5 mx-auto ltsm:w-full min-h-screen">
            <h1 className="text-4xl font-medium text-center">Phòng thí nghiệm ảo</h1>
            <div className='border-2 w-40 mx-auto my-5'></div>
            <div className="ltsm:grid-cols-1 grid grid-cols-3 gap-3 place-items-center">
                <div className="max-w-xs  rounded-md shadow-xl bg-gray p-3 hover:scale-105 delay-75">
                    <Link href='/lab/coulomb' className="flex flex-col items-center">
                    <Image src='/lab/lab-coulomb.png' width={250} height={250} alt='lab coulomb'></Image>
                    <p className="text-lg font-medium">Định luật Coulomb</p>
                    </Link>
                </div>
                <div className="max-w-xs rounded-md shadow-xl bg-gray p-3 hover:scale-105 delay-75">
                    <Link href='/lab/lap-rap-mach-dien-dc' className="flex flex-col items-center">
                    <Image src='/lab/lab-mach-dien-dc.png' width={250} height={250} alt='lab coulomb'></Image>
                    <p className="text-lg font-medium">Mạch điện DC</p>
                    </Link>
                </div>
                <div className="max-w-xs  rounded-md shadow-xl bg-gray p-3 hover:scale-105 delay-75">
                    <Link href='/lab/lap-rap-mach-dien-ac' className="flex flex-col items-center">
                    <Image src='/lab/lab-mach-dien-ac.png' width={250} height={250} alt='lab coulomb'></Image>
                    <p className="text-lg font-medium">Mạch điện AC</p>
                    </Link>
                </div>
                <div className="max-w-xs  rounded-md shadow-xl bg-gray p-3 hover:scale-105 delay-75">
                    <Link href='/lab/dien-truong' className="flex flex-col items-center">
                    <Image src='/lab/lab-dien-truong.png' width={250} height={250} alt='lab coulomb'></Image>
                    <p className="text-lg font-medium">Điện trường</p>
                    </Link>
                </div>
            </div>
        </main>
        </Layout>
    )
}