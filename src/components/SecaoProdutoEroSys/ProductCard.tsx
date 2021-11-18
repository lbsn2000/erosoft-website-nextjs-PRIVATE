import { motion } from "framer-motion"

interface ProductCardProps {
    label: string
    children: any
    isSelected: string
}

export default function ProductCard(props: ProductCardProps){
    
    const isSelected = props.isSelected === props.label    
    
    return(
        <>
            {!isSelected ? (

                <motion.div 
                    animate={isSelected ? {scale: 1.1} : {scale: 0.9} }
                    className={`
                        flex flex-col items-center jus flex-grow cursor-pointer
                        p-4 sm:p-6 
                        rounded-xl shadow-lg
                        bg-erosoft-green-1   
                `}>
        
                    {props.children}
        
                    <span className={` 
                        text-base sm:text-lg 2xl:text-xl
                        md:mx-2 lg:mx-0 text-center
                        font-semibold text-black
                    `}>
                        {props.label}
                    </span>
        
                </motion.div> 

            ) : (
    
                <motion.div 
                    animate={isSelected ? {scale: 1.05} : {scale: 0.95} }
                    className={`
                        flex flex-col items-center jus flex-grow cursor-pointer
                        p-2 sm:p-6 
                        rounded-xl shadow-lg
                        bg-gradient-to-tr from-gray-50 to-gray-100
                `}>
        
                    {props.children}
        
                    <span className={` 
                        text-base sm:text-lg 2xl:text-xl
                        md:mx-2 lg:mx-0 text-center
                        font-semibold text-black
                    `}>
                        {props.label}
                    </span>
        
                </motion.div>
            )}
        </>    
    )
}