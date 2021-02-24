import React from "react"
import {Switch,Route} from "react-router-dom"
import Header from "./components/Header"
import Cart from "./pages/Cart"
import Photos from "./pages/Photos"


function App() {
    return (
        <div>
            <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
            <link href="https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css" rel="stylesheet" />
            <link rel="stylesheet" href="styles.css"/>

            <Header/>
            <Switch>
                <Route exact path="/">
                    <Photos/>
                </Route>
                <Route exact path="/cart">
                    <Cart/>
                </Route>
            </Switch>
        </div>
    )
}

export default App

// # Image attributions:
// https://picsum.photos/

// https://unsplash.com/

// # GitHub repo of images and JSON file
// https://github.com/bobziroll/scrimba-react-bootcamp-images

// # Icon library
// https://remixicon.com/
// https://cdn.jsdelivr.net/npm/remixicon@2.3.0/fonts/remixicon.css

// # Libraries
// * React Router - https://reacttraining.com/react-router/web/guides/quick-start
// * PropTypes - https://reactjs.org/docs/typechecking-with-proptypes.html
