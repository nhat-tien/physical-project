import Layout from "../../components/Layout";

export default function MachDienDC() {
    return (
        <Layout>
        <main className="w-full min-h-screen" >
            <iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_vi.html"
            width='100%'
            height='400px'
            allowFullScreen
            >
            </iframe>
        </main>
        </Layout>
    )
}