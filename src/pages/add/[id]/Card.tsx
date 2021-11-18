import React, { useState } from "react"
import api from '../../../config/configApi'

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    modulo: string,
    nome: string,
    id: any,
    URLimagem: string,
    deletar: (event: any) => any,
    setId: (event: any) => any,
    setURLimagem: (event: any) => any,
}

export default function Card(props: CardProps) {

    function configurarDelete() {
           
        if (confirm("Quer mesmo deletar essa funcionalidade?")) {

            deleteFuncionalidade()
            props.deletar('')
        }
    }

    async function deleteFuncionalidade(){
        await api.delete(`/delete/${props.id}/${props.URLimagem}`)
                .then(response => { console.log(response)})
                .catch(response => { console.log(response) })
    }

    return (
        <div className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-2">
            <span className="font-semibold text-center">{props.nome}</span>
            <button onClick={configurarDelete} className="bg-red-400 rounded-3xl px-4 mt-2 py-1">Deletar</button>
        </div>
    )
}