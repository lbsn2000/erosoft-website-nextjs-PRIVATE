import { useEffect, useState } from "react";
import { MoneyIcon, ProductionIcon, TaxIcon, UserIcon } from "../../svg/icons/icons";
import ProductCard from "./ProductCard";
import ProductDescriptionCard from "./ProductDescriptionCard";
import ImagemSlider from "./ImagemSlider";
import api from '../../config/configApi'

interface SecaoEroSysProps {
    token: any
}

export default function SecaoEroSys(props: SecaoEroSysProps) {

    const [isSelected, setIsSelected] = useState("Nota Fiscal Eletrônica")
    const [moduloFilter, setModuloFilter] = useState("notafiscaleletronica")
    const [funcionalidade, setFuncionalidade] = useState<any>()
    const [id, setId] = useState<any>(null)

    function funcionalidadeCard() {
        return funcionalidade != null && (
            funcionalidade.map((t: any) => {
                return (
                        <ProductDescriptionCard key={t.Id} id={t.Id} isSelected={id} label={t.titulo} setId={setId} />
                )
            }
            ))
    }

    async function carregarFuncionalidades() {
        if (props.token != undefined)
            await api.get(`/servererosoft/ServerSite/SiteEroSoftServer.exe/all/${moduloFilter}?Authorization=Bearer%20${props.token}`).then(response => { setFuncionalidade(response.data) })
    }

    useEffect(() => {

        if (props.token)
            carregarFuncionalidades()
    }, [isSelected, props.token])


    return (
        <section id={"secao-erosys"} className={"bg-gray-300 flex flex-col lg:grid lg:grid-cols-5 min-h-screen w-full"}>

            <div className={`
                        grid grid-cols-2 
                        lg:flex lg:flex-col lg:justify-center sm:mt-28 lg:mt-20
                        mx-2 lg:mx-4 gap-y-4 mt-4
                  `}>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Nota Fiscal Eletrônica"), setModuloFilter("notafiscaleletronica"), setId(null) }}>

                    <ProductCard isSelected={isSelected} label={"Nota Fiscal Eletrônica"}>
                        {TaxIcon("#000")}
                    </ProductCard>

                </div>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Gestão Financeira"), setModuloFilter("financeiro"), setId(null) }}>

                    <ProductCard isSelected={isSelected} label={"Gestão Financeira"}>
                        {MoneyIcon("#000")}
                    </ProductCard>

                </div>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Gestão da Produção"), setModuloFilter("producao"), setId(null) }}>

                    <ProductCard isSelected={isSelected} label={"Gestão da Produção"}>
                        {ProductionIcon("#000")}
                    </ProductCard>

                </div>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Gestão do Pessoal"), setModuloFilter("pessoal"), setId(null) }} >

                    <ProductCard isSelected={isSelected} label={"Gestão do Pessoal"}>
                        {UserIcon("#000")}
                    </ProductCard>
                </div>

            </div>

            <div className={`lg:hidden mx-4`}>
                <div className={` 
                        grid grid-cols-2 col-auto gap-y-2 my-4 
                    `}>
                    {funcionalidadeCard()}
                </div>
            </div>
    
            <div className={`justify-self-center self-center lg:mt-20 lg:w-3/4 2xl:w-11/12 w-10/12 lg:col-span-3`}>
                <div className={`flex justify-center items-center `}>
                    <ImagemSlider isSelected={id} funcionalidade={funcionalidade} token={props.token} />
                </div>
            </div>

            <div className={`hidden lg:mt-20 lg:items-center lg:flex mx-4`}>
                <div className={` 
                        grid grid-cols-2 grid-flow-row gap-y-2 my-4 
                        lg:flex lg:flex-col lg:justify-center 
                    `}>
                    {funcionalidadeCard()}
                </div>
            </div>

        </section>
    )
}

