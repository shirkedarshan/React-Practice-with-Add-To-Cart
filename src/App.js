import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"

function App() {    
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            
            <Switch>
                {/* <Route exact path="/" render={() => <Home />} />
                <Route path="/about" render={() => <About />} />

                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} /> */}

                <Route exact path="/"><Home /></Route>
                <Route path="/about"><About /></Route>

            </Switch>
        </div>
    )
}

export default App