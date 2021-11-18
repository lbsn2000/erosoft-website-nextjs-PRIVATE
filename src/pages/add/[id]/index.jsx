import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import api from '../../../config/configApi'
import Loader from "react-loader-spinner";
import Card from "./Card";
import { useRouter } from "next/dist/client/router";
import Link from "next/link"
import Head from 'next/head'

export default function Add() {

    const router = useRouter()
    const password = router.query.id

    const [label, setlabel] = useState("")
    const [modulo, setModulo] = useState("Nota Fiscal Eletrônica")
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    const [image, setImage] = useState("")
    const [moduloFilter, setModuloFilter] = useState("nota-fiscal-eletronica")
    const [load, setLoad] = useState(false)
    const [enviado, setEnviado] = useState("")
    const [funcionalidade, setFuncionalidade] = useState()
    const [id, setId] = useState("")
    const [URLimagem, setURLimagem] = useState("")
    const [deletado, setDeletado] = useState("")

    const uploadImage = async e => {

        e.preventDefault()

        if (modulo === "") {
            alert("O Modulo da Nova Funcionalidade é Obrigatorio!")
        }
        else if (title === "") {
            alert("O Nome da Nova Funcionalidade é Obrigatorio!")
        }
        else if (image === "") {
            alert("A Imagem da Nova Funcionalidade é Obrigatoria!")
        }
        else {

            setLoad(true)

            const formData = new FormData();
            formData.append('modulo', moduloFilter)
            formData.append('title', title)
            formData.append('image', image)
            formData.append('description', description)



            const headers = {
                'headers': {
                    'Content-Type': 'application/json'
                }
            }

            await api.post("/upload-image", formData, headers)
                .then((response) => {
                    setLoad(false)
                    setEnviado(true)
                    setTitle("")
                    setImage("")
                    setDescription("")
                })
                .catch((err) => {
                    if (err.response) {
                        console.log(err.response)
                        setLoad(false)
                        setEnviado(false)
                        setTitle("")
                        setImage("")
                        setDescription("")
                    } else {
                        console.log("Erro: Tente mais tarde!")
                        setLoad(false)
                        setEnviado(false)
                        setTitle("")
                        setImage("")
                        setDescription("")
                    }
                })
        }
    }

    async function carregarFuncionalidades() {
        await api.get(`/all/${moduloFilter}`).then(response => { setFuncionalidade(response.data) })
    }

    async function deletar() {
        setDeletado(true)
    }


    useEffect(() => {
        setDeletado(false)
        carregarFuncionalidades()
    }, [moduloFilter, id, deletado])

    return (

        <>
            <Head>
                <title>Erosoft Add</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>


            {password === process.env.NEXT_PUBLIC_PASSWORD ? (

                <div className="invisible md:visible grid grid-cols-3 min-h-screen w-full bg-gray-100">
                    <div className="flex flex-col justify-center items-center">

                        <motion.button animate={label === "ADD" ? { scale: 1.1 } : { scale: 0.9 }} onClick={() => setlabel("ADD")} className="bg-green-400 p-4 m-8 rounded-2xl shadow-xl ring-2 ring-green-700 font-semibold text-xl">
                            Adicionar Uma Função
                        </motion.button>

                        <motion.button animate={label === "DELETE" ? { scale: 1.1 } : { scale: 0.9 }} onClick={() => { setlabel("DELETE"), carregarFuncionalidades }} className="bg-red-400 p-4 m-8 rounded-2xl shadow-xl ring-2 ring-red-700 font-semibold text-xl">
                            Excluir Uma Função
                        </motion.button>

                    </div>
                    {label === "" ? (
                        <div className="invisible md:visible flex justify-center items-center col-span-2 bg-gray-200 ring-2 ring-gray-400 m-4 rounded-3xl">
                            <h1 className="font-bold text-2xl">
                                {label}
                            </h1>
                        </div>
                    ) : (
                        <>
                            {label === "ADD" ? (
                                <div className="col-span-2 invisible md:visible bg-green-200 ring-2 ring-green-400 m-4 rounded-3xl">
                                    <div className="grid grid-cols-4">
                                        <button onClick={() => { setModulo("Nota Fiscal Eletrônica"), setModuloFilter("nota-fiscal-eletronica") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Nota Fiscal Eletrônica</button>
                                        <button onClick={() => { setModulo("Gestão Financeira"), setModuloFilter("gestao-financeira") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Gestão Financeira</button>
                                        <button onClick={() => { setModulo("Gestão da Produção"), setModuloFilter("gestao-da-producao") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Gestão da Produção</button>
                                        <button onClick={() => { setModulo("Gestão do Pessoal"), setModuloFilter("gestao-do-pessoal") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Gestão do Pessoal</button>
                                    </div>
                                    <div className="flex justify-center m-4">
                                        <form onSubmit={uploadImage} className="grid gap-4">

                                            <div className="grid gap-1">
                                                <span className="font-bold">Modulo da Nova Funcionalidade</span>
                                                <span className="bg-gray-300 font-medium p-2 ring-2 ring-gray-800">{modulo}</span>
                                            </div>

                                            <div className="grid gap-1">
                                                <span className="font-bold">Nome da Nova Funcionalidade</span>
                                                <span className={"text-green-800"}>{`*${title.length}/60`}</span>
                                                <input onChange={e => setTitle(e.target.value)} value={title} className="p-2 ring-2  font-medium ring-gray-800 focus:outline-none" type="text" name="nomeFuncao" id="nomeFuncao" />
                                            </div>
                                            <div className="grid gap-1">
                                                <span className="font-bold">Descrição da Nova Funcionalidade</span>
                                                <span className={"text-green-800"}>{`*${description.length}/120`}</span>
                                                <input onChange={e => setDescription(e.target.value)} value={description} className="p-2 ring-2  font-medium ring-gray-800 focus:outline-none" type="text" name="nomeFuncao" id="nomeFuncao" />
                                            </div>
                                            <div className="grid gap-1">
                                                <span className="font-bold">Imagem da Nova Funcionalidade</span>
                                                <input onChange={e => setImage(e.target.files[0])} type="file" name="image" id="image" />
                                            </div>
                                            <div className="grid gap-1">
                                                <span className="text-green-800">*Número de caracteres máximo recomendado.</span>
                                                <span className="text-green-800">**Tamanho recomendado da imagem: Menor que 1920x1080.</span>
                                            </div>
                                            {load === false ? (
                                                <>
                                                    {enviado === true ? (
                                                        <div className="self-center border-b-2 border-erosoft-green-2">
                                                            <span className="text-erosoft-green-2 font-semibold px-2">
                                                                Funcionalidade adicionada com sucesso!
                                                            </span>
                                                        </div>
                                                    ) : (
                                                        <>
                                                            {enviado === false ? (
                                                                <div className="self-center border-b-2 border-red-500">
                                                                    <span className="text-red-500 font-semibold px-2">
                                                                        Não foi possivel adicionar a funcionalidade!
                                                                    </span>
                                                                </div>

                                                            ) : (
                                                                <></>
                                                            )}
                                                        </>
                                                    )}
                                                    <button type="submit" className="bg-gray-400 mt-4 font-bold text-xl self-center justify-self-center px-16 py-4 rounded-2xl">Salvar</button>
                                                </>
                                            ) : (
                                                <div className="mt-40 font-bold text-xl self-center justify-self-center px-16 py-4">
                                                    <Loader
                                                        type="TailSpin"
                                                        color="#00A85A"
                                                        height={50}
                                                        width={50}
                                                    />
                                                </div>
                                            )}
                                        </form>
                                    </div>
                                </div>
                            ) : (
                                <div className="col-span-2 invisible md:visible bg-red-200 ring-2 ring-red-400 m-4 rounded-3xl">
                                    <div className="grid grid-cols-4">
                                        <button onClick={() => { setModuloFilter("nota-fiscal-eletronica") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Nota Fiscal Eletrônica</button>
                                        <button onClick={() => { setModuloFilter("gestao-financeira") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Gestão Financeira</button>
                                        <button onClick={() => { setModuloFilter("gestao-da-producao") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Gestão da Produção</button>
                                        <button onClick={() => { setModuloFilter("gestao-do-pessoal") }} className="p-1 m-4 self-start rounded-xl font-semibold ring-2 ring-gray-700 bg-gray-400 focus:bg-gray-500 ">Gestão do Pessoal</button>
                                    </div>
                                    <div className="grid grid-cols-3 gap-2 m-4 ">
                                        {funcionalidade != null ? (
                                            funcionalidade.map(t => {
                                                return (
                                                    <Card setId={setId} setURLimagem={setURLimagem} deletar={deletar} key={t._id} URLimagem={t.URLimagem} id={t._id} modulo={t.modulo} nome={t.titulo} />
                                                )
                                            }
                                            )
                                        ) : (
                                            <></>
                                        )
                                        }
                                    </div>

                                </div>
                            )}
                        </>
                    )}

                </div>
            ) : (
                <>
                    <div className="flex  justify-center items-center min-h-screen w-full ">
                        <button className="flex p-10 bg-gray-200 rounded-3xl font-bold">
                            <Link href="/">
                                Voltar Para Página Inicial
                            </Link>
                        </button>
                    </div>
                </>
            )
            }
        </>
    )
}