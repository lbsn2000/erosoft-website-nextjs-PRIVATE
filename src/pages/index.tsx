import CabecalhoNavBar from "../components/NavBar/CabecalhoNavBar";
import RodapeNavBar from "../components/NavBar/RodapeNavBar";
import SecaoContato from "../components/SecaoContato";
import SecaoEmpresa from "../components/SecaoEmpresa";
import SecaoHome from "../components/SecaoHome";
import SecaoEroSys from "../components/SecaoProdutoEroSys";
import Head from 'next/head'
import { useEffect, useState } from "react";
import api from '../config/configApi'

export default function Home() {

    const [token, setToken] = useState<any>()

    function definirToken(data: any){
        setToken(data.token)
    }

    var postData = {
        "login" : "SITE","senha" : `30583058`,"cnpj" : "11868677000162","software" : "ChatEroSoft"
    };

    let axiosConfig = {
            "ContentType": "application/json",
            "Auth": "EroSoft 22.11.2021"
    };


    async function carregarFuncionalidades() {
        await api.post('http://erosoft.com.br:8085/servererosoft/EroSoftOS/OSServerAMPQ.exe/usuario/auth',postData,{headers: axiosConfig})
            .then(response => definirToken(response.data))
            .catch(err => console.log("Erro ==>",err));
    }

    useEffect(() => {
        carregarFuncionalidades()
    }, [])

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
            <SecaoEroSys token={token}/>
            <SecaoContato />
        </div>

    )
}