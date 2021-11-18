import CabecalhoNavBar from "../components/NavBar/CabecalhoNavBar";
import RodapeNavBar from "../components/NavBar/RodapeNavBar";
import SecaoContato from "../components/SecaoContato";
import SecaoEmpresa from "../components/SecaoEmpresa";
import SecaoHome from "../components/SecaoHome";
import SecaoEroSys from "../components/SecaoProdutoEroSys";
import Head from 'next/head'

export default function Home() {
    return (
        <div className="min-w-min ">
            <Head>
                <title>EroSoft</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="keywords" content="EroSoft" />
            </Head>
            <CabecalhoNavBar />
            <RodapeNavBar />
            <SecaoHome />
            <SecaoEmpresa />
            <SecaoEroSys />
            <SecaoContato />
        </div>

    )
}