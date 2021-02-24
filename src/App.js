// Components
import Store from './components/store';

import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/global.css';

function App(props) {
  return (
    <div className="App">
      <div className="header">
        <h1>
          <img src="/images/logo.png" width="100"/>
          <span id="logotitle">Hartist Mugs</span>
        </h1>
      </div>

      <Store/>
    </div>
  );
}

export default App;
