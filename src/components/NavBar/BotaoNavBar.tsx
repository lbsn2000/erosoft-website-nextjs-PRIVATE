import { motion } from 'framer-motion'
import { Link } from 'react-scroll'

interface NavBarButtonProps {
      label: string
      sectionId?: any
      onClick?: (evento: any) => void
  }

export default function NavBarButton(props: NavBarButtonProps) {
      return(

                  <Link 
                        className={`cursor-pointer`}
                        onClick={() =>  props.onClick}
                        to={props.sectionId}
                        activeClass="active"
                        smooth={true}
                        duration={500}
                        delay={100}
                        isDynamic={true}
                        ignoreCancelEvents={false}
                        
                  >
                        <motion.div 
                              className={`
                              hover:bg-gray-300 hover:shadow-2xl 
                              rounded-xl 
                              lg:pl-10 lg:pr-10 
                              md:pl-5 md:pr-5
                              sm:pl-2 sm:pr-2
                              pl-0 pr-0
                              p-0.5 
                              `}
                              whileHover={{scale: 1.05}}
                              whileTap={{ scale: 1.1}} 
                        >
                                    <div className={`flex `}>
                                          <div className={`text-xl font-semibold`}>
                                                {props.label}
                                          </div>
                                    </div>
                        </motion.div>
                  </Link>
      )
}