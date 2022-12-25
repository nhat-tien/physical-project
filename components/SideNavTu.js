import Link from "next/link"

export default function SideNavTu() {

    return (
        <div className=" ltsm:hidden left-0 top-16 bg-white w-1/4 h-screen fixed overflow-y-auto border-r-2 border-gray pl-2 p-3">
            <h3 className="font-medium text-xl truncate">Từ trường, cảm ứng điện từ</h3>
                <ul className="ml-5">
                    <li className="my-4 truncate  hover:border-blue hover:text-blue p-1 border-2 border-transparent"><Link href='../tu-truong-cam-ung-dien-tu/dinh-luat-ampere'>Tương tác từ định luật Ampère</Link></li>
                </ul>
                <h3 className="font-medium text-xl truncate">Video</h3>
                <ul className="ml-5">
                    <li className="my-4 truncate  hover:border-blue hover:text-blue p-1 border-2 border-transparent"><Link href='../bai-giang/video-ampere'>Ampere</Link></li>
                </ul>
                <h3 className="font-medium text-xl truncate">Tài liệu thêm</h3>
                <ul className="ml-5">
                    <li className="my-4 truncate  hover:border-blue hover:text-blue p-1 border-2 border-transparent"><Link href='../tai-lieu-them/tom-tat'>Tóm tắt công thức</Link></li>
                </ul>
        </div>
    )
}