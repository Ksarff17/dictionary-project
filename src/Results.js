import React from "react"
import Meaning from "./Meaning"

export default function Results(props){
    if (props.info){
    return(
        <div className="results">
            <section>
            <h2>{props.info.word} </h2>
            <h5><sm>{props.info.phonetic}</sm></h5>
            </section>
            {props.info.meanings.map(function(meaning,index){ 
                return (
                    <section key={index}>
                        <Meaning meaning ={meaning}/>
                    </section>
                )
            })}
            
        </div>
    )}
    else {
        return null
    }
}