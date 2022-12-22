import HomeNav from './HomeNav'
import Foot from './Foot'
import SideNavDien from './SideNavDien'
import SideNavTu from './SideNavTu'
import Path from './Path'


export default function LayoutArticle({ children, topic}) {
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