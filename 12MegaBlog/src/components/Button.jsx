import React, { Children } from 'react'

function Button({
    Children,
    type = "button",
    bgcolor = "bg-blue-600",
    textcolor = "text-white",
    classname = "",
    ...props
}) 
{
    
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textcolor} ${classname}`} {...props}>
        {Children}
    </button>
  )
}

export default Button
