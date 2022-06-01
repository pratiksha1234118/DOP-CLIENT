import logo from './logo.svg';
import './App.css';
import { DopAccountUpdate } from './ComponentCustomer/DopAccountUpdate';
import DopViewAccounts from './ComponentCustomer/DopViewAccounts';
import { Routes, Route, Link,BrowserRouter } from "react-router-dom";
import {CustomerLogin} from './ComponentCustomer/CustomerLogin';
import {AdminLogin} from './ComponentCustomer/AdminLogin';
function App() {
  return (
   
    <Routes>
    
      <Route  path='/dopAccountUpdate' element={<DopAccountUpdate/>}></Route>
      <Route  path='/viewAccount' element={<DopViewAccounts/>}></Route>    
     <Route  path='/' element={<CustomerLogin/>}></Route>
     <Route  path='/loginAdmin' element={<AdminLogin/>}></Route>
     
     </Routes>
   

  );
}

export default App;
