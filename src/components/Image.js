import React , {useState} from "react"

function Image( {className , img} ){
    const [hovered,setHovered] = useState(false)

    console.log(hovered)

    return(
        <div className={`${className} image-container `} 
        onMouseEnter={()=> setHovered(true)}
        ouMouseLeave={()=> setHovered(false)}>  
            <img src={img.url} className="image-grid"/>
        </div>
    )
}

export default Image