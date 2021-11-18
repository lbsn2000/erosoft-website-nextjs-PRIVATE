import EmpresaCard from "./EmpresaCard"

export default function SecaoEmpresa() {
      return(
            <section id={"secao-empresa"} className={"background-triangle"}>
                  <div id={"conteudo"} className={`flex justify-center items-center min-h-screen w-full bg-erosoft-green-1 bg-opacity-80`}>
                        <EmpresaCard/>
                  </div>
            </section>
      )
}
