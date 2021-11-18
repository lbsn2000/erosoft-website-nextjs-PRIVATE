import HomeCard from "./HomeCard"

export default function SecaoHome() {

    const slogan = "Sistema Integrado de Gerenciamento Administrativo"

    return (
        <section id={"secao-home"} className={"background-home"}>
            <div className={`grid grid-rows-2 lg:grid-rows-1 lg:grid-cols-2 min-h-screen w-full`}>
                <div id="homecard" className={`
                              lg:w-5/6 self-center row-start-2 lg:row-start-1 
                        `}>
                    <HomeCard />
                </div>

                <div className={`self-start lg:self-center`}>
                    <h1 className={`
                                    text-4xl lg:text-6xl 2xl:text-7xl
                                    text-center 
                                    mt-28 mb-8 ml-8 
                                    text-white font-bold
                              `}>
                        {slogan}
                    </h1>
                </div>
            </div>
        </section>
    )
}