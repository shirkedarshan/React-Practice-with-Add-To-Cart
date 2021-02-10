import React from "react"
import {Link, Switch, Route} from "react-router-dom"

import Home from "./Home"
import About from "./About"

function App() {    
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
            </nav>

            {/* <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
            </Switch>
             */}
            <Switch>
                <Route 
                    exact 
                    path="/" 
                    render={
                        ({match, location, history, staticContext}) => (
                            <Home match={match} location={location} />
                        )}
                ></Route> 
                <Route path="/about" component={About} />
            </Switch>
        </div>
    )
}

export default App