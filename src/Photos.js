import React from "react"

export default function Photos(props){
    if(props.images){  
    return(
        <section className="Photos">
            <div className="row">
                
                    {props.images.map(function(photo,index){
                        return(
                        <div className="col-4" key="index">
                            <img src={photo.src.landscape}  alt={photo.alt} className="img-fluid m-2 rounded"/>
                        </div>)
            })}
            
            </div>
        </section>
    )}
    else{
        return null
    }
}
