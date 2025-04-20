import React, {useState} from "react"
import Results from "./Results"
import Photos from "./Photos"
import './Dictionary.css'
import axios from "axios"

export default function Dictionary(props){
let [word, setWord] = useState(props.defaultKeyWord)
let [results, setResults]= useState(null)
let [loaded,setLoaded]= useState(false)
let [photos,setPhotos]= useState(null)

    function displayDictionaryInfo(response){
        setResults(response.data )
    }

    function handleImageResponse(response){
        console.log(response.data.photos)
        setPhotos(response.data.photos)
    }

    function updateWord(event){
        setWord(event.target.value)
    }
    function load(){
        setLoaded(true);
        Search();
      
    }
    function handleSubmit(event){
        event.preventDefault();
        Search();
    }
    
    function Search(event){
        // event.preventDefault();
        let apiKey ="7o60e48082t80b65afac13511e68bed5"
        let url =`https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`
        axios.get(url).then(displayDictionaryInfo)

        let sheCodesImageApiKey =('7o60e48082t80b65afac13511e68bed5');
        let sheCodesImagesUrl =`https://api.shecodes.io/images/v1/search?query=${word}&key=${sheCodesImageApiKey}`;
        axios.get(sheCodesImagesUrl ).then(handleImageResponse);

    }
    
    if (loaded){
        return(
            <div className="Dictionary">
                <section>
                <form onSubmit={handleSubmit}>
                    <input type="search" autoFocus={true} placeholder="Search for a word..." onChange={updateWord}/>
                </form>
                </section>
                <Results info = {results}/>
                <Photos images={photos}/>
            </div>
        );}
    else {
        load();
        return "Loading"

    }}
    
    
