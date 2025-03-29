import React from "react"
import Synonyms from "./Synonyms"

export default function Meaning(props){
    console.log(props.meaning)
    return (
        <div>
            <h4>{props.meaning.partOfSpeech}</h4>
            <p>{props.meaning.definition}
                <br/>
            <em>{props.meaning.example}</em></p>
            <Synonyms synonyms={props.meaning.synonyms}/>
       
        </div>
    )
}