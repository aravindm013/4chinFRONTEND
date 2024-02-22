import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
  } from "react-router-dom";
import {Home} from './Home'
import {Faq} from './Faq'
import { Board } from './boards/Board'
import { render } from '@testing-library/react';
import { Error404 } from './Error404';
import {Thread} from './boards/Thread'

const Child = ({title}) => {
  const {id,board} = useParams()
  return (
    <div>
       <h1>totot {id}:{board}</h1>
    </div>
  )
}

const Routers = () => {
    return (
        <Router>
          <div>
            {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
            <Switch>
              {/* < Route path="/:board/:id" children={<Child />} />
              <Route path="/anime">
                <Board />
              </Route> */}
              
              <Route path='/boards/:board/:id' children={<Thread/>} />
              <Route path="/boards/:board" children={<Board />} />
              <Route path='404/boards/:board' children ={<Error404/>} />
              <Route path='404/thread/:id' children = {<Error404/>} />
              <Route path="/404">
                <Error404 />
              </Route>
              <Route path="/faq">
                <Faq />
              </Route>
              <Route path="/">
                <Home />
              </Route>
              
              
            </Switch>
          </div>
        </Router>
    )
}

export default Routers
