import React  from "react"

type InputProps = React.ComponentProps<'input'>


export const Custominput = (props: InputProps) => {
    return <input {...props}/>
}