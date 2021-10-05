// == Import
import Navbar from '../Navbar';
import './styles.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Home from '../../pages';

// == Composant
const App = () => {

  return (
    <Router>
      <Home />
    </Router>
  );
}
 

// == Export
export default App;
