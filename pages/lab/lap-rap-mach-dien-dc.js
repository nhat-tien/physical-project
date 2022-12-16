import Layout from "../../components/Layout";

export default function MachDienDC() {
    return (
        <Layout>
        <main className="px-5 mx-auto w-full min-h-screen" >
        <iframe src="https://phet.colorado.edu/sims/html/circuit-construction-kit-dc-virtual-lab/latest/circuit-construction-kit-dc-virtual-lab_vi.html"
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