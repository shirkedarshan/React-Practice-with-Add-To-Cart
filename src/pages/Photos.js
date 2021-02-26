import React, {useContext} from "react"
import Image from "../components/Image"
import {Context} from "../Context"
import {getClass} from "../utils"
import PropTypes from "prop-types"

function Photos() {
    const {allPhotos} = useContext(Context)
    
    console.log(allPhotos)

    const imageElements = allPhotos.map((img , i) => (
        <Image key={img.id} img={img} className={getClass(i)} />
    ))
    
    return (
        <main className="photos">
            {imageElements}
        </main>
    )
}

Image.propTypes = {
    className: PropTypes.string,
    img: PropTypes.shape({
        id: PropTypes.string.isRequired,
    })
}

export default Photos