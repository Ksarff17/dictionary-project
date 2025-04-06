import React, {useState} from "react"
import Results from "./Results"
import './Dictionary.css'



import axios from "axios"

export default function Dictionary(){
let [word, setWord] = useState("")
let [results, setResults]= useState(null)

    function displayDictionaryInfo(response){
        setResults(response.data )
    }

    function handlePexelsResponse(response){
        console.log(response)
    }

    function updateWord(event){
        setWord(event.target.value)
    }
    
    function Search(event){
        event.preventDefault();
        let apiKey ="7o60e48082t80b65afac13511e68bed5"
        let url =`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
        axios.get(url).then(displayDictionaryInfo)

        const pexelsApiKey =('S5yNJGqOlPrCLUzq6CajQwhqwVVBY0TOT13Whjkix0LFxIikaDmr3FbJ');
        let pexelsURL =`https://api.pexels.com/v1/search?query=${word}`;
        let headers = {'Authorization': `Bearer ${pexelsApiKey}`};
        axios.get(pexelsURL, {headers: headers }).then(handlePexelsResponse);

    }
    
    return(
        <div className="Dictionary">
            <section>
            <form onSubmit={Search}>
                <input type="search" autoFocus={true} placeholder="Search for a word..." onChange={updateWord}/>
            </form>
            </section>
            <Results info = {results}/>
        </div>
    )
}