
import './App.css'
import DepartmentComponent from './Components/DepartmentComponent'
import EmployeeComponent from './Components/EmployeeComponent'
import FooterComponent from './Components/FooterComponent'
import HeaderComponent from './Components/HeaderComponent'
import ListDepartmentComponent from './Components/ListDepartmentComponent'
import ListEmployeeComponent from './Components/ListEmployeeComponent'
import {BrowserRouter,Route,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <BrowserRouter>
      <HeaderComponent/>
        <Routes>
              {/* // http://localhost:3000 */}
              <Route path='/' element = { <ListEmployeeComponent />}></Route>
               {/* // http://localhost:3000/employees */}
               <Route path='/employees' element = { <ListEmployeeComponent />}></Route>
               {/* // http://localhost:3000/add-employees */}
               <Route path='/add-employee' element = { <EmployeeComponent />}></Route>
                {/* // http://localhost:3000/update-employees/1 */}
                <Route path='/update-employee/:id' element = { <EmployeeComponent />}></Route>
                {/* // http://localhost:3000/delete-employees/1 */}
                <Route path='/delete-employee/:id' element = { <EmployeeComponent />}></Route>
                {/* // http://localhost:3000/departments */}
                <Route path='/departments' element = { <ListDepartmentComponent />}></Route>
                {/* // http://localhost:3000/add-department */}
               <Route path='/add-department' element = { <DepartmentComponent />}></Route>
               {/* // http://localhost:3000/update-department */}
               <Route path='/update-department/:id' element = { <DepartmentComponent />}></Route>
               {/* // http://localhost:3000/delete-departments/1 */}
               <Route path='/delete-department/:id' element = { <DepartmentComponent />}></Route>
        </Routes>      
      <FooterComponent/>
    </BrowserRouter>
    </>
  )
}

export default App
