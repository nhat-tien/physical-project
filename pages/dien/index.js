import Link from "next/link";
import Layout from "../../components/Layout";

export default function Dien() {
    return (
        <Layout>
        <main>Day la phan dien</main>
        <Link href='/dien/dien-truong-tinh/dinh-luat-coulomb'>Link to Coulomb</Link>
        </Layout>
    )
}