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
            <div className="mb-12 mt-0 max-w-xl mx-auto p-3">
                <p className="font-semibold">Ngày 12/12/2022, 7 sinh viên khoa Công nghệ Thông tin cùng mang hoài bão to lớn, đã cùng chung tay khởi nghiệp, lập nên start-up công nghệ mang tên Seven T Group. Trải qua nhiều sóng gió chông gai, nhưng nhờ tinh thần bền bỉ cùng sự chèo lái khôn ngoan của Leader Mr. Trường, chúng tôi đã gặt hái nhiều thành công vang dội. Hãy tham gia cùng chúng tôi, chúng tôi sẽ cho bạn thấy tương lai của Việt Nam.</p>
            </div>
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
            <Image className="ltsm:hidden absolute left-0 -z-20" src='/about/side-image2.png' width={200} height={300} alt='side image'></Image>
            <div className="border-2 border-gray w-32 mx-auto my-10"></div>
            <p className="text-5xl font-noto-serif text-center">Nhân sự</p>
            <div className="ltsm:flex-col ltsm:items-center flex flex-row max-w-2xl mx-auto flex-wrap gap-5 mt-5 justify-evenly">
                <div className="flex flex-col rounded-lg max-w-md shadow-lg w-48">
                    <div className="bg-heavy-orange rounded-t-lg relative h-24">
                        <Image className="rounded-full border-2 border-white absolute top-10 left-12" src='/about/van-truong.jpg' width={90} height={90} alt='tien'></Image>
                    </div>
                    <div className="mt-8 p-4">
                        <h5 className="font-bold text-xl text-center">Phan Văn Trường</h5>
                        <p className="text-center">CEO</p>
                    </div>
                </div>
                <break className="ltsm:hidden basis-full w-0 h-0"></break>
                <div className="flex flex-col rounded-lg max-w-md shadow-lg w-48">
                    <div className="bg-blue rounded-t-lg relative h-24">
                        <Image className="rounded-full border-2 border-white absolute top-10 left-12" src='/about/nhat-tien.jpg' width={90} height={90} alt='tien'></Image>
                    </div>
                    <div className="mt-8 p-4">
                        <h5 className="font-bold text-xl text-center">Lê Đặng Nhật Tiến</h5>
                        <p className="text-center">Phó Giám Đốc</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg max-w-md shadow-lg w-48">
                    <div className="bg-green rounded-t-lg relative h-24">
                        <Image className="rounded-full border-2 border-white absolute top-10 left-12" src='/about/duy-thanh.jpg' width={90} height={90} alt='tien'></Image>
                    </div>
                    <div className="mt-8 p-4">
                        <h5 className="font-bold text-xl text-center">Đào Duy Thành</h5>
                        <p className="text-center">Trưởng phòng tài chính</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg max-w-md shadow-lg w-48">
                    <div className="bg-yellow rounded-t-lg relative h-24">
                        <Image className="rounded-full border-2 border-white absolute top-10 left-12" src='/about/tuong.jpg' width={90} height={90} alt='tien'></Image>
                    </div>
                    <div className="mt-8 p-4">
                        <h5 className="font-bold text-xl text-center">Nguyễn Phúc Tường</h5>
                        <p className="text-center">Thư kí</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg max-w-md shadow-lg w-48">
                    <div className="bg-heavy-blue rounded-t-lg relative h-24">
                        <Image className="rounded-full border-2 border-white absolute top-10 left-12" src='/about/le-hoang-tuan.jpg' width={90} height={90} alt='tien'></Image>
                    </div>
                    <div className="mt-8 p-4">
                        <h5 className="font-bold text-xl text-center">Lê Hoàng Tuấn</h5>
                        <p className="text-center">Trưởng phòng tài chính</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg max-w-md shadow-lg w-48">
                    <div className="bg-blue-for-text rounded-t-lg relative h-24">
                        <Image className="rounded-full border-2 border-white absolute top-10 left-12" src='/about/tam-cris.jpg' width={90} height={90} alt='tien'></Image>
                    </div>
                    <div className="mt-8 p-4">
                        <h5 className="font-bold text-xl text-center">Nguyễn Thành Tâm</h5>
                        <p className="text-center">Kỹ thuật viên</p>
                    </div>
                </div>
                <div className="flex flex-col rounded-lg max-w-md shadow-lg w-48">
                    <div className="bg-black-blur rounded-t-lg relative h-24">
                        <Image className="rounded-full border-2 border-white absolute top-10 left-12" src='/about/thanh-tuan.jpg' width={90} height={90} alt='tien'></Image>
                    </div>
                    <div className="mt-8 p-4">
                        <h5 className="font-bold text-xl text-center">Lữ Thanh Tuấn</h5>
                        <p className="text-center">Kỹ thuật viên</p>
                    </div>
                </div>
            </div>
            <div className="border-2 border-gray w-32 mx-auto my-10"></div>
        </main>
        </Layout>
    )
}