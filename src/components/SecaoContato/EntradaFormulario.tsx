interface EntradaFormularioProps {
      label: string
      value: string
      type: string
      onChange: (event: any) => void
}

export default function EntradaFormulario(props: EntradaFormularioProps) {
      return(
            <div className={`flex flex-col`}>
                  
                  <label>
                        {props.label}
                  </label>

                        {props.type === "text-area" ? (
                              <textarea 
                                    value={props.value}
                                    onChange={event => props.onChange?.(event.target.value)}
                                    className={` 
                                          py-4 pl-4
                                          rounded-lg shadow-sm 
                                          focus:outline-none focus:ring-1
                                          focus:bg-white focus:ring-gray-500
                                          bg-gray-200 
                              `}/>   
                        ) : (
                              <input 
                                    type={"text-area"}
                                    value={props.value}
                                    onChange={event => props.onChange?.(event.target.value)}
                                    className={` 
                                          py-2 pl-4
                                          rounded-lg shadow-sm 
                                          focus:outline-none focus:ring-1
                                          focus:bg-white focus:ring-gray-500
                                          bg-gray-200 
                              `} />
                        )}
            </div>
      )
}