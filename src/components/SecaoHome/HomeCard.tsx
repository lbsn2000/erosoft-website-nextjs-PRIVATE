import Botao from "./Botao"

export default function HomeCard(){

      const text = `Nosso software de gestão empresarial é preparado para se adaptar a necessidade do usuário, tendo como foco o controle financeiro, produtivo e contábil, integrando os vários processos envolvidos.`

      return(
            <div className={`
                  px-4 mx-4 mb-4 lg:mt-24 lg:ml-10
                  flex flex-col items-center
                  rounded-2xl shadow-xl 
                  bg-gray-50
            `}>
                  
                  <p className={`
                        px-4 mt-4 lg:mt-8
                        text-xl sm:text-2xl 2xl:text-4xl
                        text-center font-medium
                        text-gray-500  
                  `}>
                        {text}
                  </p>
                  
                  <Botao text={"Saiba Mais"} to={"secao-erosys"}/>

            </div>
                        
      )
}