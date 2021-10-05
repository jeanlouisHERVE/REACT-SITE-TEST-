// == Import
import Navbar from '../Navbar';
import reactLogo from './react-logo.svg';
import './styles.scss';
import {BrowserRouter as Router} from 'react-router-dom'
import Sidebar from '../Sidebar';

// == Composant
const App = () => {

  return (
    <Router>
      <Sidebar />
      <Navbar />
    </Router>
  );
}
 

// == Export
export default App;
