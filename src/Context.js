import React, {useState,useEffect } from "react"

const Context = React.createContext()

function ContextProvider(props){ // props or {children}
    const [allPhotos, setAllPhotos] = useState([])

    const url = "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json"

    useEffect( () => {
        fetch(url)
        .then(res => res.json())
        .then(data => setAllPhotos(data))
    },[])
    
    function toggleFavorite(id){
        const updatedArr = allPhotos.map( photo => {
            if ( photo.id === id){
                console.log(id)
                return{
                    ...photo,   
                    isFavorite : !photo.isFavorite
                }
            }
            return photo
        })
        setAllPhotos(updatedArr)
    }
    console.log(allPhotos)
    // Write {children} insted props.children

    return(
        <Context.Provider value={{allPhotos,toggleFavorite}}>
            {props.children} 
        </Context.Provider> 
    )
}

export { ContextProvider , Context }