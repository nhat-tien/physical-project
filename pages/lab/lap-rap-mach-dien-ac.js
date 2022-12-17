import Layout from "../../components/Layout";

export default function MachDienAC() {
    return (
        <Layout>
        <main className="w-full min-h-screen" >
            <iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-ac/latest/circuit-construction-kit-ac_vi.html"
            width='100%'
            height='400px'
            allowFullScreen
            >
            </iframe>
        </main>
        </Layout>
    )
}