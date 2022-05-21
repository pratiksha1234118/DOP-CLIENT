import logo from './logo.svg';
import './App.css';
import { DopAccountUpdate } from './ComponentCustomer/DopAccountUpdate';
import DopViewAccounts from './ComponentCustomer/DopViewAccounts';
import { Routes, Route, Link,BrowserRouter } from "react-router-dom";
import {CustomerLogin} from './ComponentCustomer/CustomerLogin';
function App() {
  return (
    <div>
    <Routes>
    <Route  path='/' element={<DopAccountUpdate/>}></Route>
    <Route  path='/viewAccount' element={<DopViewAccounts/>}></Route>
    </Routes>
   
    </div>
  );
}

export default App;
