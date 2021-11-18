import { motion } from "framer-motion"
import React, { useState } from "react"
import EntradaFormulario from "./EntradaFormulario"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";

export default function ContactSectionCard() {

    const [nome, setNome] = useState("")
    const [empresa, setEmpresa] = useState("")
    const [email, setEmail] = useState("")
    const [assunto, setAssunto] = useState("")
    const [mensagem, setMensagem] = useState("")
    const [load, setLoad] = useState(false)
    const [enviado, setEnviado] = useState<any>("")

    function confirmarEnvio(enviou?: boolean) {
        if (enviou === true) {
            setNome("")
            setEmpresa("")
            setEmail("")
            setAssunto("")
            setMensagem("")
            setEnviado(true)
        } else {
            setEnviado(false)
        }
    }

    function enviarEmail() {
        if (nome === "") {
            alert("O Nome é Obrigatorio!")
        }
        else if (email === "") {
            alert("O Email é Obrigatorio!")
        }
        else if (assunto === "") {
            alert("O Assunto é Obrigatorio!")
        }
        else if (mensagem === "") {
            alert("A Mensagem é Obrigatoria!")
        }
        else {

            let emailEnviar = {
                nome: nome,
                empresa: empresa,
                email: email,
                assunto: assunto,
                mensagem: mensagem
            }

            setLoad(true)

            fetch('http://erosoft.com.br/api/emailform', {
                method: "POST",
                body: JSON.stringify(emailEnviar),
                headers: { "Content-type": "application/json; charset=UTF-8",
                            "Access-Control-Allow-Origin": "*"
                }
            })
                .then(res => {

                    setLoad(true)

                    if (res.status === 200) {
                        setLoad(false)
                        confirmarEnvio(true)
                    } else {
                        setLoad(false)
                        confirmarEnvio(false)
                    }
                })
                .catch(erro => {
                    console.log("ERRO ==>", erro)
                })
        }
    }

    return (
        <div id={"Formulario-Contato"} className={`
                  flex-auto rounded-2xl shadow-inner bg-gray-50 
                  px-4 sm:px-8 
                  pt-4 xl:pt-8
            `}>

            <EntradaFormulario
                label={"Nome"}
                value={nome}
                onChange={setNome}
                type={"text"}
            />
            <EntradaFormulario
                label={"Empresa"}
                value={empresa}
                onChange={setEmpresa}
                type={"text"}
            />
            <EntradaFormulario
                label={"Email"}
                value={email}
                onChange={setEmail}
                type={"email"}
            />
            <EntradaFormulario
                label={"Assunto"}
                value={assunto}
                onChange={setAssunto}
                type={"text"}
            />

            <EntradaFormulario
                label={"Mensagem"}
                value={mensagem}
                onChange={setMensagem}
                type={"text-area"}
            />

            <div className={`flex flex-col my-5`}>

                {!load ? (
                    <>
                        {enviado === true ? (
                            <div className="self-center border-b-2 border-erosoft-green-2">
                                <span className="text-erosoft-green-2 font-semibold px-2">
                                    Email enviado com sucesso!
                                </span>
                            </div>
                        ) : (
                            <>
                                {enviado === false ? (
                                    <div className="self-center border-b-2 border-red-500">
                                        <span className="text-red-500 font-semibold px-2">
                                            Não foi possivel enviar o email!
                                        </span>
                                    </div>

                                ) : (
                                    ""
                                )}
                            </>
                        )}

                        <motion.button
                            onClick={enviarEmail}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 1.1 }}
                            className={`
                                                text-2xl
                                                px-16 py-2 
                                                self-center
                                                my-2
                                                rounded-full 
                                                font-semibold
                                                cursor-pointer 
                                                hover:shadow-xl
                                                bg-erosoft-green-1 text-white
                                    `}>
                            Enviar
                        </motion.button>
                    </>
                ) : (
                    <div className="self-center my-2">
                        <Loader
                            type="TailSpin"
                            color="#00A85A"
                            height={50}
                            width={50}
                        />
                    </div>
                )}
            </div>
        </div>
    )
}