import HomeNav from './HomeNav'
import Foot from './Foot'
import SideNavDien from './SideNavDien'
import SideNavTu from './SideNavTu'
import Path from './Path'
import { useRouter } from "next/router"
import { useMemo } from "react";
import SelectionDien from './SelectionDien';
import SelectionTu from './SelectionTu';
import Link from 'next/link'



export default function LayoutArticle({ children}) {
const router = useRouter()
const topic = useMemo(() => router.route.split("/")[1],[router]);
    return (
        <>
       <HomeNav />
        {topic == 'dien' ? <SideNavDien /> : <SideNavTu />}
        <main className='article'>
            <div className="p-6">
            {topic == 'dien' ? <SelectionDien /> : <SelectionTu />}
                <Path />
                {children}
            </div>
        <div className='sm:hidden w-11 ml-auto'>
        <Link href=''>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11.25l-3-3m0 0l-3 3m3-3v7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        </Link>
        </div>
        <Foot />
        </main>
        
        </>
    )
}