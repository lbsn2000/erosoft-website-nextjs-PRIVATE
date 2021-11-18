import { useEffect, useState } from "react";
import { MoneyIcon, ProductionIcon, TaxIcon, UserIcon } from "../../svg/icons/icons";
import ProductCard from "./ProductCard";
import ProductDescriptionCard from "./ProductDescriptionCard";
import ImagemSlider from "./ImagemSlider";
import api from '../../config/configApi'

export default function SecaoEroSys() {

    const [isSelected, setIsSelected] = useState("Nota Fiscal Eletrônica")
    const [moduloFilter, setModuloFilter] = useState("nota-fiscal-eletronica")
    const [funcionalidade, setFuncionalidade] = useState<any>()
    const [id, setId] = useState<any>(null)

    function funcionalidadeCard() {
        return funcionalidade != null && (
            funcionalidade.map((t: any) => {
                return (
                    <ProductDescriptionCard key={t._id} id={t._id} isSelected={id} label={t.titulo} setId={setId} />
                )
            }
            ))
    }

    async function carregarFuncionalidades() {
        await api.get(`/all/${moduloFilter}`).then(response => { setFuncionalidade(response.data) })
    }

    useEffect(() => {
        carregarFuncionalidades()
    }, [isSelected])

    return (
        <section id={"secao-erosys"} className={"bg-gray-300 flex flex-col min-h-screen w-full"}>

            <div className={`
                        grid grid-cols-2 md:grid-cols-4
                        mt-8 sm:mt-28 mx-8
                        gap-2 
                  `}>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Nota Fiscal Eletrônica"), setModuloFilter("nota-fiscal-eletronica"), setId(null) }}>

                    <ProductCard isSelected={isSelected} label={"Nota Fiscal Eletrônica"}>
                        {TaxIcon("#000")}
                    </ProductCard>

                </div>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Gestão Financeira"), setModuloFilter("gestao-financeira"), setId(null) }}>

                    <ProductCard isSelected={isSelected} label={"Gestão Financeira"}>
                        {MoneyIcon("#000")}
                    </ProductCard>

                </div>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Gestão da Produção"), setModuloFilter("gestao-da-producao"), setId(null) }}>

                    <ProductCard isSelected={isSelected} label={"Gestão da Produção"}>
                        {ProductionIcon("#000")}
                    </ProductCard>

                </div>

                <div className={`flex justify-center items-center`} onClick={() => { setIsSelected("Gestão do Pessoal"), setModuloFilter("gestao-do-pessoal"), setId(null) }} >

                    <ProductCard isSelected={isSelected} label={"Gestão do Pessoal"}>
                        {UserIcon("#000")}
                    </ProductCard>
                </div>

            </div>

            <div className="flex flex-col items-center md:items-start md:flex-row mx-4 md:mt-10 xl:mt-4 2xl:mt-8">

                <div className={`w-3/4 md:w-2/4 md:ml-4 lg:ml-16`}>
                    <div className={` 
                        grid grid-cols-2 grid-flow-row gap-y-2 my-4 
                        lg:grid-rows-3 lg:grid-cols-3 lg:grid-flow-row
                    `}>
                        {funcionalidadeCard()}
                    </div>
                </div>


                <div className={`w-11/12 md:w-2/4 flex justify-center`}>
                    <div className={`mx-4 lg:mx-16`}>
                        <ImagemSlider isSelected={id} funcionalidade={funcionalidade} />
                    </div>
                </div>

            </div>
        </section>
    )
}

