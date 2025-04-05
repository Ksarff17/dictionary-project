import React from "react"
import Synonyms from "./Synonyms"
import './Meaning.css'

export default function Meaning(props){
    console.log(props.meaning)
    return (
        <div className="Meaning">
            <h3>{props.meaning.partOfSpeech}</h3>
            <p>{props.meaning.definition}
                <br/>
            <em className="example">{props.meaning.example}</em></p>
            <Synonyms synonyms={props.meaning.synonyms}/>
       
        </div>
    )
}