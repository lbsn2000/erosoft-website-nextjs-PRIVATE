import { motion } from "framer-motion"
import { Link } from 'react-scroll'

interface FilledButtonProps {
    text: string
    to?: any
}

export default function FilledButton(props: FilledButtonProps) {
    return (
        <Link
            className={`cursor-pointer self-center`}
            to={props.to}
            activeClass="active"
            smooth={true}
            duration={500}
            delay={100}
            isDynamic={true}
            ignoreCancelEvents={false}
        >
            <motion.button className={`
                text-xl px-8 py-2 m-4
                lg:text-2xl lg:px-16   
                rounded-full font-semibold cursor-pointer hover:shadow-xl bg-erosoft-green-1 text-white
            `}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.1 }}
            >
                {props.text}
            </motion.button>
        </Link>
    )
}