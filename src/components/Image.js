import React , {useState} from "react"

function Image( {className , img} ){
    const [hovered,setHovered] = useState(false)
    const heartIcon = hovered && <i className="ri-heart-line favorite"></i> 
    const plusIcon =  hovered && <i className="ri-heart-line plus"></i> 

    console.log(hovered)

    return(
        <div className={`${className} image-container `} 
            onMouseEnter={()=> setHovered(true)}
            ouMouseLeave={()=> setHovered(false)}>  
            {heartIcon}
            {plusIcon}
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image