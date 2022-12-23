import HomeNav from './HomeNav'
import Foot from './Foot'
import SideNavDien from './SideNavDien'
import SideNavTu from './SideNavTu'
import Path from './Path'
import { useRouter } from "next/router"
import { useMemo } from "react";



export default function LayoutArticle({ children}) {
const router = useRouter()
const topic = useMemo(() => router.route.split("/")[1],[router]);
    return (
        <>
       <HomeNav />
        {topic == 'dien' ? <SideNavDien /> : <SideNavTu />}
        <main className='article'>
            <div className="p-6">
                <Path />
                {children}
            </div>
        <Foot />
        </main>
        
        </>
    )
}