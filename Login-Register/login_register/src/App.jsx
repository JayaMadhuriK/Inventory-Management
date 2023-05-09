import Register from './Components/Register';
import Login from './Components/login'

import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>

          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
