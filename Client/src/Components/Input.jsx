import React, {useId} from 'react'

const Input = React.forwardRef(
    ({label, type="text", className="", ...props}, ref) => {
        const id = useId()
  return (
    <div>
        {label && 
        <label
            className={`text-sm text-grey-700 block font-medium`}
            htmlFor={id}>
            {label}
        </label>}
        <input 
        type={type}
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none ${className}`} 
        ref={ref}
        {...props}
        id={id}/>

    </div>
  )
}
)

export default Input