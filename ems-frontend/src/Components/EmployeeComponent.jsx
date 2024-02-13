import React, { useEffect, useState } from 'react'
import { addEmployee, getEmployee, updateEmployee } from '../services/EmployeeService'
import { useNavigate, useParams } from 'react-router-dom'
import { listDepartments } from '../services/DepartmentService'


const EmployeeComponent = () => {

    const[firstName,setFirstName] = useState('')
    const[lastName,setLastName] = useState('')
    const[email,setEmail] = useState('')
    const[departmentId,setDepartmentId] = useState('')
    const[departments,setDepartments] = useState([])
    const {id} = useParams();

    useEffect(() => {
        listDepartments().then((response => {
            setDepartments(response.data);
            })).catch(error => {
                console.error(error);
            })
     },[])
 

    // initialize state variables that will hold validation errors
    const[errors,setErrors] = useState({
        firstname:'',
        lastName:'',
        email:'',
        department:''
    })

    const navigator = useNavigate();

// normal javascript function to set firstname
function handleFirstName(event){
    setFirstName(event.target.value);
}

// arrow function to set last name
const handleLastName = (event) => setLastName(event.target.value);

// email is set in the below emial onChange event handler


useEffect(() => {
    if(id){
        getEmployee(id).then((response) => {
            setFirstName(response.data.firstName);
            setLastName(response.data.lastName);
            setEmail(response.data.email);
            setDepartmentId(response.data.departmentId)
        }).catch(error => {
            console.error(error);
        })
    }
}, [id])

function saveOrUpdateEmployee(event){
    event.preventDefault();

    if(validateForm()){
        const employee={firstName,lastName,email,departmentId}
        console.log(employee)
        if(id){
            updateEmployee(id,employee).then((response) => { 
                console.log(response.data); 
                navigator('/employees')
        }).catch(error => {
            console.error(error);
        })
    }   else {
        addEmployee(employee).then((response) => { 
            console.log(response.data); 
            navigator('/employees')
        }).catch(error => {
            console.error(error);
        })
    }      
        
    }   
}

function validateForm(){

    //declare a flag
    let valid = true;

    // use ... (spread operator) to copy errors from state object errors to local constant errorsCopy
    const errorsCopy={... errors}

    if(firstName.trim()){
        errorsCopy.firstName = '';
    } else {
        errorsCopy.firstName = 'First name is Required';
        valid = false;
    }

    if(lastName.trim()){
        errorsCopy.lastName = '';
    } else {
        errorsCopy.lastName = 'Last name is Required';
        valid = false;
    }

    if(email.trim()){
        errorsCopy.email = '';
    } else {
        errorsCopy.email = 'Email is Required';
        valid = false;
    }

    if(departmentId){
        errorsCopy.department = ''
    }else {
        errorsCopy.department = 'Select Department'
        valid = false
    }

    setErrors(errorsCopy);

    return valid;
}

function pageTitle(){
    if(id){
        return <h2 className='text-center'> Update Employee</h2>
    } else{
        return <h2 className='text-center'> Add Employee</h2>
    }
}

  return (
    // this component is used for both add and update employee
    // so use pageTitle function to dynamically change title name if id is present in the route
    <div className='container'>
        <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
                
                {
                    pageTitle()
                }
                <div className='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'> First Name: </label>
                            <input 
                            type='text' 
                            placeholder='Enter Employee First name' 
                            name='firstName' 
                            value={firstName} 
                            className={`form-control ${errors.firstName ? 'is-invalid':''}`}
                            onChange={handleFirstName}
                            >                                
                            </input>
                            { errors.firstName && <div className='invalid-feedback'> { errors.firstName} </div> }
                        </div> 
                        <div className='form-group mb-2'>
                            <label className='form-label'> Last Name: </label>
                            <input 
                            type='text' 
                            placeholder='Enter Employee Last name' 
                            name='lastName' 
                            value={lastName} 
                            className={`form-control ${errors.lastName ? 'is-invalid':''}`}
                            onChange={handleLastName}
                            >                                
                            </input>
                            { errors.lastName && <div className='invalid-feedback'> { errors.lastName} </div> }
                        </div> 
                        <div className='form-group mb-2'>
                            <label className='form-label'> Email: </label>
                            <input 
                            type='password' 
                            placeholder='Enter Employee Email' 
                            name='email' 
                            value={email} 
                            className={`form-control ${errors.email ? 'is-invalid':''}`}
                            onChange={(event) => setEmail(event.target.value)}
                            >                                
                            </input>
                            { errors.email && <div className='invalid-feedback'> { errors.email} </div> }
                        </div> 
                        <div className='form-group mb-2'>
                            <label className='form-label'> Select Department: </label>
                            <select 
                            className={`form-control ${errors.department ? 'is-invalid':''}`}
                            value={departmentId}
                            onChange={(event) => setDepartmentId(event.target.value)}
                            >
                            <option value="Select Department">Select Department</option>
                            {
                                departments.map(department =>
                                    <option key={department.id} value={department.id} > {department.departmentName} </option>
                                    )
                            }
                            </select>
                                       { errors.department && <div className='invalid-feedback'> { errors.department} </div> }
                        </div>
                        <button className='btn btn-success' onClick={saveOrUpdateEmployee} >Submit</button>
                    </form>
                </div>
            </div>
        </div>

    </div>
  )
}

export default EmployeeComponent