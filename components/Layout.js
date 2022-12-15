import HomeNav from './HomeNav'
import Foot from './Foot'

export default function Layout({ children }) {
    return (
        <>
        <HomeNav />
        {children}
        <Foot />
        </>
    )
}