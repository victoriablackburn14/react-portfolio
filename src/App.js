import './App.css';
import './components/Header';
import Header from './components/Header';
import Home from './components/Home';
import { Route } from 'react-router-dom';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

function App() {
  return (
   <div>
     <Header />
        <Route exact path="/" component={Home}/>
        <Route exact path="/resume" component={Resume}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/portfolio" component={Portfolio}/>
   </div>
  );
}

export default App;
