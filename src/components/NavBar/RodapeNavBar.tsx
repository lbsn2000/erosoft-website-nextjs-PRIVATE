import { LocationIcon, PhoneIcon, Whatsapp } from "../../svg/icons/icons";

export default function NavFooter() {

    const phone = "(37) 3225-2322"
    const endereco = "R. São José, 66 - Centro, Nova Serrana - MG"

    return (
        <nav id="NavFooter" className={`flex gap-x-2 flex-col sm:flex-row justify-center items-center w-full fixed mt-14 rounded-b-xl shadow-lg z-40 bg-gray-200`}>

            <button className="cursor-pointer">
                <a href="https://api.whatsapp.com/send?phone=553732252322&text=Ol%C3%A1!" className={`flex items-center p-1`}>
                    <div className="px-1">
                        {Whatsapp("#000")}
                    </div>

                    <div className="px-1 sm:px-0">
                        {PhoneIcon("#000")}
                    </div>

                    <span className={`sm:ml-2 text-sm font-semibold`}>
                        {phone}
                    </span>
                </a>
            </button>

            <button className="cursor-pointer">
                <a href="https://goo.gl/maps/dRTDGqAbXmTsqEfp9" className={`sm:flex items-center p-1 hidden`}>

                    {LocationIcon("#000")}

                    <span className={`sm:ml-2 text-sm font-semibold`}>
                        {endereco}
                    </span>
                </a>
            </button>
        </nav>
    )
}