
import AdminBoard from './Components/AdminBoard';
import AdminRegister from './Components/AdminRegister';
import EmployeeBoard from './Components/EmployeeBoard';
import EmployeeRegister from './Components/EmployeeRegister';
import Login from './Components/login';
import {BrowserRouter,Routes,Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/adminregister' element={<AdminRegister/>}/>
            <Route path='/employeeregister' element={<EmployeeRegister/>}/>
            <Route path='/adminboard' element={<AdminBoard/>}/>
            <Route path='/employeeboard' element={<EmployeeBoard/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
