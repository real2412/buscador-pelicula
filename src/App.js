import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Detail} from './pages/Detail'
import {NotFound} from './pages/NotFound'
import {Footer} from './componentes/Footer'
import './App.css';
import 'bulma/css/bulma.css'


class App extends Component {

  render (){
    /*const url = new URL(document.location)
    const Page = url.searchParams.has('id') ? 
                <Detail id={url.searchParams.get('id')}/> :
                <Home/>*/
    return (
      <div className="App container has-background-dark is-fluid">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:id' component={Detail} />
          <Route component={NotFound}/>
        </Switch>
        <br/>
        <br/>
        <br/>
        <Footer/>
      </div>
    )
  }
}

export default App;
