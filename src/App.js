import { BrowserRouter as Router } from 'react-router-dom'
import Routers from './routes';


function App(props) {
  return (
    <>
      <Router>
        <Routers />
      </Router>
    </>
  );
}

export default App;
