// == Import
import Navbar from '../Navbar';
import reactLogo from './react-logo.svg';
import './styles.scss';
import {BrowserRouter as Router} from 'react-router-dom'

// == Composant
const App = () => {

  return (
    <Router>
      <Navbar />
    </Router>
  );
}
 

// == Export
export default App;
