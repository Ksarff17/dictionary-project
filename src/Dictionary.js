import React, {useState} from "react"
import axios from "axios"

export default function Dictionary(){
let [word, setWord] = useState(null)

    function displayInfo(response){
        console.log(response.data)
    }

    function updateWord(event){
        setWord(event.target.value)
    }
    
    function Search(event){
        event.preventDefault();
        let apiKey ="7o60e48082t80b65afac13511e68bed5"
        let url =`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
        axios.get(url).then(displayInfo)
    }
    
    return(
        <div className="Dictionary">
            <form onSubmit={Search}>
                <input type="search" autoFocus={true} placeholder="Enter a word here" className="ms-3" onChange={updateWord}/>
                <input type="submit" value="Search"className="btn btn-primary"/>
            </form>
        </div>
    )
}