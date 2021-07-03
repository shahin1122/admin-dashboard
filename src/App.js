import './App.css';
import Navbar from './Component/Navbar'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

function App() {
  return (
    
    <div>
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path='/'/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
