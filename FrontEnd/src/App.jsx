import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRegister from './Components/AdminRegister';
import EmployeeNavbar from './Components/EmployeeNavbar';
import EmployeeRegister from './Components/EmployeeRegister';
import Login from './Components/login';
import AdminNavBar from './Components/AdminNavBar';
import ItemsPopUp from './Components/ItemsPopUp';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}/>
          <Route path='/adminregister' element={<AdminRegister/>}/>
          <Route path='/employeeregister' element={<EmployeeRegister/>}/>
          <Route path='/employeeboard' element={<EmployeeNavbar/>}/>
          <Route path='/adminboard' element={<AdminNavBar/>}/>
          <Route path='/itemspopup' element={<ItemsPopUp/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
