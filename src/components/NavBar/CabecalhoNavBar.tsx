import BotaoNavBar from "./BotaoNavBar";
import Image from 'next/image'
import Logo from '../../../public/erosoft-logo.png'

export default function NavBarHeader() {
      return(

            <nav className={`flex w-full fixed z-50 bg-gray-50`}>
                  
                  <div className={`flex fixed self-center h-12 w-14`}>
                        <Image src={Logo} alt="logo" />
                  </div>          
                        
                  <h1 className={`self-center ml-16 text-4xl font-normal text-gray-800 `}>{`Ero'Soft`}</h1>

                  <ul className={`invisible sm:visible flex justify-end sm:flex-grow mr-2`}>
                        
                        <div className={`flex my-3 mr-3`}>
                              <BotaoNavBar
                                    label={"Home"}
                                    sectionId={"secao-home"}
                              />
                              <BotaoNavBar
                                    label={"Empresa"}
                                    sectionId={"secao-empresa"}
                              /> 
                              <BotaoNavBar
                                    label={"Ero'Sys"}
                                    sectionId={"secao-erosys"}
                              /> 
                              <BotaoNavBar
                                    label={"Contato"}
                                    sectionId={"secao-contato"}
                              />                   
                        </div>
                  </ul>
            </nav>
      )
}