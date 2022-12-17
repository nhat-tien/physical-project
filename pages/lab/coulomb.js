import Layout from "../../components/Layout";

export default function Coulomb() {
    const setFullScreen = () => {
        const screen = document.getElementById('lab');
        screen.requestFullscreen();
    }
    return (
        <Layout>
        <main className="w-full min-h-screen" >
            <iframe src="https://phet.colorado.edu/sims/html/coulombs-law/latest/coulombs-law_vi.html"
            width='100%'
            height='400px'
            id='lab'
            allowFullScreen
            >
            </iframe>
            <div onClick={setFullScreen} className='mt-1 cursor-pointer mx-auto max-w-max p-1 text-blue-for-text border-4 border-blue-for-text font-medium'>Click to full screen</div>
        </main>
        </Layout>
    )
}