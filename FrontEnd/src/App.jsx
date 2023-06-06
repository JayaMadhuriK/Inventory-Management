
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AdminBoard from './Components/AdminBoard';
import AdminRegister from './Components/AdminRegister';
import EmployeeBoard from './Components/EmployeeBoard';
import EmployeeList from './Components/EmployeeList';
import ItemList from './Components/ItemList';
import EmployeeRegister from './Components/EmployeeRegister';
import Login from './Components/login';
import AdminProfile from './Components/AdminProfile';
import AddEmployee from './Components/AddEmployee';
import AddItem from './Components/AddItem';

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
            <Route path='/employeelist' element={<EmployeeList/>}/>
            <Route path='/itemlist' element={<ItemList/>}/>
            <Route path='/profile' element={<AdminProfile/>}/>
            <Route path='/addemployee' element={<AddEmployee/>}/>
            <Route path='/additem' element={<AddItem/>}/>


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
