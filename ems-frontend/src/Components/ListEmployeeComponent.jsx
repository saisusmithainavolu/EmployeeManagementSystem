import React,{useEffect, useState} from 'react'
import { listEmployees, deleteEmployee } from '../services/EmployeeService'
import { Button } from 'bootstrap'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

    // using usestate hook to hold the response of the rest api
    // pass the response to usestate hook and it return an array of state object and the function to update the state object
   const [employees, setEmployees] = useState([])

   // useNavigate hook is a javascript function that helping navigating from one page to other
   const navigator = useNavigate();

    useEffect(() => {
       getAllEmployees();
    },[])

    function getAllEmployees(){
        listEmployees().then((response => {
            setEmployees(response.data);
            })).catch(error => {
                console.error(error);
            })
    }

    function addNewEmployee(){
        navigator('/add-employee')
    }

    function updateEmployee(id){
        navigator(`/update-employee/${id}`)
    }

    function removeEmployee(id){
       console.log(id);

       deleteEmployee(id).then((response) =>{
        getAllEmployees();
        }).catch(error => {
            console.error(error);
        })
    }

  return (
    <div className = 'container'>
        <h2 className='text-center'> List Of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}> Add Employee </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee First Name</th>
                    <th>Employee Last Name</th>
                    <th>Employee Email</th>
                    <th>Actions</th>                    
                </tr>
            </thead>
            <tbody>
                {
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateEmployee(employee.id)} 
                                    style={{marginRight: '10px'}}>Update</button>                               
                                <button className='btn btn-danger' onClick={()=>removeEmployee(employee.id)}>Delete</button>
                            </td>
                        </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent