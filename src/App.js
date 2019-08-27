import React from 'react';
import './App.css';
import Nav from './pages/Nav';
import About from './pages/About';
import List from './pages/List'
import articleDetail from './pages/articleDetail';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

function App(){
  return (
    <Router>
  <div className="App">
   <Nav />
  <Switch>
   <Route path="/" exact component={Home}/>
   <Route path="/about" component={About} />
   <Route path="/list" exact component={List} />
   <Route path="/list/:id" component={articleDetail} />
  </Switch>
  </div>
  </Router>
);
}

const Home = () => (
  <div>
   <h1>HomePage</h1>
  </div>
);
export default App;
