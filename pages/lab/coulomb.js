import Layout from "../../components/Layout";

export default function Coulomb() {
    return (
        <Layout>
        <main className="px-5 mx-auto w-full min-h-screen" >
        <iframe src="https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_vi.html"
        width="1000"
        height="540"
        allowfullscreen
        className="mx-auto"
        >
        </iframe>
        </main>
        </Layout>
    )
}