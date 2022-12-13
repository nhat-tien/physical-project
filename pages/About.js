import HomeNav from "../components/HomeNav";
import Link from "next/link";


export default function About() {
    return (
        <div className="container">
        <HomeNav />
        <main className="mt-nav">
        <div>This is About page</div>
        <Link href='/'>Tro ve</Link>
        </main>
        </div>
    )
}