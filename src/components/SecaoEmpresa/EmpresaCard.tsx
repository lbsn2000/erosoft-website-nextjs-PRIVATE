import Image from 'next/image'
import Logo from '../../../public/erosoft-logo.png'


export default function CompanySecitonCard(){

      const text1 = `   A Ero'soft é uma empresa 
                        de desenvolvimento de softwares
                        destinado às pessoas jurídicas
                        e físicas. O principal foco é 
                        o controle financeiro, produtivo e 
                        contábil, integrando os vários 
                        processos envolvidos.`

      const text2= `    A empresa está situada à Rua São José,
                        66 no centro de Nova Serrana-MG, 
                        desde 26 de abril de 2010, quando 
                        começou suas atividades com respeito
                        e compromisso, atendendo tanto a necessidade do usuário,
                        e de nossos clientes.

      `
      const text3 = `   Atualmente atuamos em Nova Serrana-MG e região.`
      

      return(
            <div className={`lg:w-4/5 mt-4 md:mt-24`}>

                  <div className={` 
                        px-2 mb-4 mx-4
                        rounded-2xl shadow-2xl 
                        bg-gray-50
                        grid-auto md:grid md:grid-cols-3 md:grid-rows-1
                  `}>
                        
                        <div id={"logo"} className={`flex flex-col justify-center items-center`}> 
                              
                              <div className={`flex items-center h-24 w-20 sm:h-28 sm:w-24 xl:h-36 xl:w-32 2xl:h-44 2xl:w-40`}>
                                    <Image src={Logo} alt="logo" />
                              </div>
                              
                              <span className={`text-4xl sm:text-5xl xl:text-6xl 2xl:text-7xl font-semibold text-erosoft-green-1`}>
                                    {`Ero'Soft`}
                              </span>
                        </div>


                        <div id={"texto-empresa"} className={`md:py-8 2xl:py-16 row-span-2 md:col-span-2`}>
                              
                              <p className={`text`}>
                                    {text1}
                              </p>
                              
                              <p className={`text`}>
                                    {text2}
                              </p>
                              
                              <p className={`text`}>
                                    {text3}
                              </p>
                        </div>
                  </div>  
            </div>           
      )
}