import Navbar from './components/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { contextExample } from './context/contextExample';

function App() {
  return (
    <Router>
    <contextExample.Provider value='this is context from app.js'>
      <div className="App">
        <Navbar/>
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/cart'>
              <Cart/>
            </Route>
          </Switch>
        </div>
      </div>
    </contextExample.Provider>
    </Router>
  );
}

export default App;
