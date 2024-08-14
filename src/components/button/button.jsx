import React from "react"
import './button.css'

const whatLabel = (label, labelDefault) =>{
    if (labelDefault){
        alert (`Esse botão está usando um valor padrão pois não tem label: (${label})`)
    } else if(label){
        alert(`O label desse botão é (${label})`)
    }
    
}

const Button = (props) =>{
    //ou seja, aqui eu estou fazendo a verificação se é label default
    const labelDefault = props.label === Button.defaultProps.label;
    return <button className="btn" onClick={() => 
    whatLabel(props.label, labelDefault) }> {props.label} 
            </button>
}

Button.defaultProps = {
    label: 'Valor sem label'
}

export default Button