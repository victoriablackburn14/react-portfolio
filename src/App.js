import './App.css';
import './components/Header';
import Header from './components/Header';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Resume from './components/Resume';


function App() {
  return (
   <div>
     <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
     
   </div>
  );
}

export default App;
