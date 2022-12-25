import { useRouter } from "next/router";
import { useEffect, useMemo } from "react";


export default function SelectionTu() {
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
            <option value='../tu-truong-cam-ung-dien-tu/dinh-luat-ampere' id='dinh-luat-ampere'>Tương tác từ định luật Ampère</option>
            <option value='../tai-lieu-them/tom-tat' id='tom-tat'>Tóm tắt công thức</option>
        </select>
    )
}