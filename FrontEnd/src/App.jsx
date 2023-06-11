import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminRegister from './Components/AdminRegister';
import EmployeeBoard from './Components/EmployeeBoard';
import EmployeeRegister from './Components/EmployeeRegister';
import Login from './Components/login';
import AdminNavBar from './Components/AdminNavBar';
import ItemsPopUp from './Components/ItemsPopUp';
import SideNavbar from './Components/SideNavbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path='/' element={<Login/>}/>
            <Route path='/adminregister' element={<AdminRegister/>}/>
            <Route path='/employeeregister' element={<EmployeeRegister/>}/>
            <Route path='/employeeboard' element={<EmployeeBoard/>}/>
            <Route path='/adminboard' element={<AdminNavBar/>}/>
            <Route path='/itemspopup' element={<ItemsPopUp/>}/>
            <Route path='/sidenavbar' element={<SideNavbar/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
