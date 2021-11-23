import { Download, EmailIcon, LocationIcon, PhoneIcon } from "../../svg/icons/icons"
import WaveBackgroundSVG from "../../svg/waveBackgroundSVG";
import FormularioContato from "./FormularioContato";

export default function SecaoContato() {

    const telefone = "(37) 3225-2322"
    const email = "contato@erosoft.com.br"
    const endereco = "R. São José, 66 - Centro, Nova Serrana - MG"
    const atendimento = "Atendimento"

    return (
        <section id={"secao-contato"} className={"background-triangle "}>
            <div className={`flex flex-col min-h-screen w-full bg-erosoft-green-1 bg-opacity-80`}>

                <WaveBackgroundSVG />

                <div id="conteudo"
                    className={`
                                    flex flex-grow
                                    flex-col lg:flex-row 
                                    mx-4 sm:mx-20 md:mx-40 lg:mx-8
                        `}>
                    <div id="lado-esquerdo"
                        className={` 
                                          flex flex-col flex-grow 
                                          justify-end lg:justify-center                      
                                          mt-2 lg:mt-20                                                                    
                                          sm:items-center z-30
                              `}>
                        <h2 id="subtitulo"
                            className={`
                                                text-white font-bold
                                                text-xl md:text-2xl 2xl:text-4xl
                                                my-1 lg:my-3
                                    `}>
                            {atendimento}
                        </h2>

                        <div className={"flex items-center my-1 lg:my-3"}>

                            {PhoneIcon()}

                            <span className={` 
                                                text-lg xl:text-xl 2xl:text-2xl 
                                                text-white font-medium ml-2  
                                          `}>
                                {telefone}
                            </span>
                        </div>

                        <div className={"flex items-center my-1 lg:my-3"}>

                            {EmailIcon()}

                            <span className={` 
                                                text-lg xl:text-xl 2xl:text-2xl 
                                                text-white font-medium ml-2                                     
                                          `}>
                                {email}
                            </span>
                        </div>

                        <div className={"flex items-center my-1 lg:my-3"}>

                            {LocationIcon()}

                            <span className={` 
                                                text-lg xl:text-xl 2xl:text-2xl 
                                                text-white font-medium ml-2                                   
                                          `}>
                                {endereco}
                            </span>
                        </div>

                        <div className="hidden sm:flex sm:flex-col sm:justify-center sm:items-center">

                            <h2 className={`
                                        text-white font-bold
                                        text-xl md:text-2xl 2xl:text-4xl
                                        my-1 lg:my-3
                                    `}>
                                Links Úteis
                            </h2>

                            <form method="get" action="AcessoRemoto.exe">
                                <button type="submit" className={"flex items-center p-2 rounded-md shadow-lg  my-1 lg:my-3 hover:bg-red-700 bg-red-600"} >
                                    {Download()}

                                    <p className={`text-lg  cursor-pointer  xl:text-xl 2xl:text-2xl text-gray-200 font-medium ml-2`} >Acesso Remoto</p>
                                </button>
                            </form>


                        </div>
                    </div>


                    <div id="lado-direito"
                        className={`
                                          items-start lg:items-center 
                                          mt-2 my-4 lg:my-0 lg:mt-20                      
                                          flex flex-grow z-30 
                              `}>
                        <FormularioContato />
                    </div>
                </div>
            </div>
        </section>
    )
}
