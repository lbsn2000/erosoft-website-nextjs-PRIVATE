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
                    <div key={t.Id}>
                        <ProductDescriptionCard key={t.Id} id={t.Id} isSelected={id} label={t.titulo} setId={setId} />
                    </div>
                )
            }
            ))
    }

    async function carregarFuncionalidades() {
        if (props.token != undefined)
            await api.get(`/servererosoft/ServerSite/SiteEroSoftServer.exe/all/${moduloFilter}?Authorization=Bearer%20${props.token}`).then(response => { setFuncionalidade(response.data) })
    }

    useEffect(() => {

        if(props.token)
            carregarFuncionalidades()
    }, [isSelected, props.token])


    return (
        <section id={"secao-erosys"} className={"bg-gray-300 flex flex-col lg:grid lg:grid-cols-5 min-h-screen w-full"}>

            <div className={`
                        grid grid-cols-2 
                        lg:flex lg:flex-col lg:justify-center sm:mt-28 lg:mt-20
                        mx-4 gap-2 md:gap-y-2
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

            <div className={`
                flex flex-col items-center justify-center  
                md:items-start md:flex-row md:mt-10 
                lg:col-span-4 lg:grid 
                xl:mt-4 
                2xl:mt-8
            
            `}>

                <div className={`lg:mt-20`}>
                    <div className={` 
                        grid grid-cols-2 grid-flow-row gap-y-2 my-4 
                        lg:grid-rows-3 lg:grid-cols-3 lg:grid-flow-row
                    `}>
                        {funcionalidadeCard()}
                    </div>
                </div>


                <div className={`justify-self-center lg:w-2/4 2xl:w-3/4`}>
                    <div className={`flex justify-center items-center `}>
                        <ImagemSlider isSelected={id} funcionalidade={funcionalidade} token={props.token} />
                    </div>
                </div>

            </div>
        </section>
    )
}

