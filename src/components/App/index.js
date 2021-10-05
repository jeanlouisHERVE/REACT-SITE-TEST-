// == Import
import './styles.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from '../../pages/Home';

// == Composant
const App = () => (
  <Router>
    <Home />
  </Router>
);

// == Export
export default App;
