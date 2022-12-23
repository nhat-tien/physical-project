import Link from "next/link"

export default function SideNavDien() {

    return (
        <div className=" ltsm:hidden left-0 top-16 bg-white w-1/4 h-screen fixed overflow-y-auto border-r-2 border-gray pl-2 p-3">
            <h3 className="font-medium text-xl truncate">Điện trường tĩnh</h3>
                <ul className="ml-5">
                    <li className="my-4 truncate  hover:border-blue hover:text-blue p-1 border-2 border-transparent"><Link href='../dien-truong-tinh/dinh-luat-coulomb'>Định luật Coulomb</Link></li>
                    <li className="my-4 truncate  hover:border-blue hover:text-blue p-1 border-2 border-transparent"><Link href='../dien-truong-tinh/dien-truong-duong-suc-dien-truong' >Điện trường - đường sức điện trường</Link></li>
                </ul>
                <h3 className="font-medium text-xl truncate">Dòng điện không đổi</h3>
                <ul className="ml-5">
                    <li className="my-4 truncate  hover:border-blue hover:text-blue p-1 border-2 border-transparent"><Link href='' className="">Đại cương về dòng điện</Link></li>
                </ul>
                <h3 className="font-medium text-xl truncate">Tài liệu thêm</h3>
                <ul className="ml-5">
                    <li className="my-4 truncate  hover:border-blue hover:text-blue p-1 border-2 border-transparent"><Link href='../tai-lieu-them/tom-tat' className="">Tóm tắt công thức</Link></li>
                </ul>
        </div>
    )
}