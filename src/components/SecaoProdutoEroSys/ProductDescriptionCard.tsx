import { motion } from "framer-motion"

interface ProductDescriptionCardProps{
    label: any,
    id: string,
    isSelected: string,
    setId: (event: any) => void
}

export default function ProductDescriptionCard(props: ProductDescriptionCardProps){
    
    const isSelected = props.id === props.isSelected 
    const idAtual = props.id   

    function selecionar(){
        props.setId(idAtual)
    }

    return(
        <>
            {!isSelected ? (
                
                <motion.div 
                    onClick={selecionar}
                    animate={isSelected ? {scale: 1} : {scale: 0.9} }
                    className={`  
                        flex justify-center items-center p-1 
                        rounded-sm shadow-lg text-center cursor-pointer
                        text-xs sm:text-lg 2xl:text-xl
                        bg-gradient-to-r ring-2 to-green-400 from-erosoft-green-1 ring-erosoft-green-3
                    `}>

                    <span className={`text-black text-center font-semibold`}>
                        {props.label}
                    </span>

                </motion.div>
        
            ) : (
            
                <motion.div  
                    animate={isSelected ? {scale: 1} : {scale: 0.95} }
                    className={` 
                        flex justify-center items-center p-1
                        rounded-sm shadow-lg text-center cursor-pointer
                        text-xs sm:text-lg 2xl:text-xl
                        bg-gradient-to-r ring-2 to-gray-200 from-white ring-gray-400
                `}>

                    <span className={`text-black text-center font-semibold`}>
                        {props.label}
                    </span>
                
                </motion.div>
            )}
        </>
    )
}