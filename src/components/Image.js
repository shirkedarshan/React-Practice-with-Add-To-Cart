import React , {useContext, useState} from "react"
import {Context} from "../Context"

function Image( {className , img} ){
    const [hovered,setHovered] = useState(false)
    const {toggleFavorite} = useContext(Context)

    const heartIcon = hovered && <i className="ri-heart-line favorite" onClick={ ()=> toggleFavorite(img.id) } ></i> 
    const plusIcon =  hovered && <i className="ri-heart-line plus"></i> 

    console.log(hovered)

    return(
        <div className={`${className} image-container `} 
            onMouseEnter={()=> setHovered(true)}
            ouMouseLeave={()=> setHovered(false)}>  
            
            <img src={img.url} className="image-grid"/>{heartIcon}
            {plusIcon}
        </div>
    )
}

export default Image