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
    
    console.log(allPhotos)
    // Write {children} insted props.children

    return(
        <Context.Provider value={{allPhotos}}>
            {props.children} 
        </Context.Provider> 
    )
}

export { ContextProvider , Context }