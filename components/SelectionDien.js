import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";


export default function SelectionDien() {
const router = useRouter();
const route = useMemo(() => router.route.split("/")[3],[router]);
useEffect(() => {
const select = document.getElementById(route);
select.setAttribute('selected','true');
});
const handleChange = (e) => {
        const path = e.target.value;
        router.push(path);
    }
    return (
        <select className="sm:hidden block my-3 mx-auto border-2 rounded-md p-1 w-full" onChange={handleChange}>
            <option value='../dien-truong-tinh/dinh-luat-coulomb' id='dinh-luat-coulomb'>Định luật Coulomb</option>
            <option value='../dien-truong-tinh/dien-truong-duong-suc-dien-truong' id='dien-truong-duong-suc-dien-truong'>Điện trường - đường sức điện trường</option>
            <option value='../dong-dien-khong-doi/dai-cuong-dong-dien' id='dai-cuong-dong-dien'>Đại cương về dòng điện</option>
            <option value='../bai-giang/video-dien-truong' id='video-dien-truong'>Video điện trường</option>
            <option value='../tai-lieu-them/tom-tat' id='tom-tat'>Tóm tắt công thức</option>
        </select>
    )
}