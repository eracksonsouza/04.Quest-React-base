import React from "react";

const textoPadrao = "Antonio"

const TextParagrafo = ({textoParagrafo = textoPadrao, color}) =>{
    return (
        <div className="text-paragrafo"
        style={{color}}> 
            <h3> Paragrafo </h3>
            <p style={{color: 'red'}}>   
                {textoParagrafo.toUpperCase()}
            </p>
        </div>
    )
}

TextParagrafo.defaultProps = {
    color: 'orange'
}

export default TextParagrafo