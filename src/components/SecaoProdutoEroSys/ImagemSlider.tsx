import { useEffect, useState } from "react"
import React from "react"

interface ImagemSliderProps {
    funcionalidade: any
    isSelected: any
    token: any
}

export default function ImagemSlider(props: ImagemSliderProps) {

    const [current, setCurrent] = useState(0)
    const [length, setLength] = useState(0)

    const timeoutRef = React.useRef<any>(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        setCurrent(0)
    }, [props.funcionalidade])

    useEffect(() => {
        if (props.funcionalidade) {
            setLength(props.funcionalidade.length)
        }
        if (typeof props.isSelected != "string") {
            resetTimeout();
            timeoutRef.current = setTimeout(() => setCurrent(current === length - 1 ? 0 : current + 1), 3000);
        }
        return () => {
            resetTimeout()
        };
    }, [current, props.funcionalidade])

    return (
        <>
            {typeof props.isSelected === 'string' ? (
                
                props.funcionalidade != null && props.funcionalidade.map((e: any, index: number) => {

                    return (e.Id === props.isSelected &&
                        <div key={e.Id}>
                            <div className={"text-xs sm:text-base xl:text-md 2xl:text-xl m-4 p-2 rounded-xl text-center ring-2 ring-erosoft-green-1 bg-gray-100 font-semibold shadow-lg"}>
                                <span>{e.descricao}</span>
                            </div>
                            <img alt="Imagem da Funcionalidade" src={`http://erosoft.com.br:8085/servererosoft/ServerSite/SiteEroSoftServer.exe/${e.urlimagem}?Authorization=Bearer%20${props.token}`} />
                        </div>
                    )
                })
            ) : (
                props.funcionalidade != null && props.funcionalidade.map((e: any, index: number) => {
                    return current === index && <img key={index} alt="Imagem da Funcionalidade" src={`http://erosoft.com.br:8085/servererosoft/ServerSite/SiteEroSoftServer.exe/${e.urlimagem}?Authorization=Bearer%20${props.token}`} />
                })
            )
            }
        </>
    )
}
