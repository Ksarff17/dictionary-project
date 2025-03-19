import React, {useState} from "react"

export default function Dictionary(){
let [word, setWord] = useState(null)

    function updateWord(event){
        setWord(event.target.value)
    }
    
    function Search(event){
        event.preventDefault();
        alert(`${word}`)
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