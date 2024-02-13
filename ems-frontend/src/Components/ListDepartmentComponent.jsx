import React, {useEffect, useState } from 'react'
import { deleteDepartment, listDepartments } from '../services/DepartmentService';
import { useNavigate } from 'react-router-dom'

const ListDepartmentComponent = () => {

    const [departments,setDepartments] =   useState([]);

    // useNavigate hook is a javascript function that helping navigating from one page to other
   const navigator = useNavigate();

    useEffect(() => {
        getAllDepartments();
     },[])
 
     function getAllDepartments(){
         listDepartments().then((response => {
             setDepartments(response.data);
             })).catch(error => {
                 console.error(error);
             })
     }

     function addNewDepartment(){
        navigator('/add-department')
    }

    function updateDepartment(id){
        navigator(`/update-department/${id}`)
    }

    function removeDepartment(id){
        console.log(id);
    
        deleteDepartment(id).then((response) =>{
         getAllDepartments();
         }).catch(error => {
             console.error(error);
         })
     }



  return (
    <div className = 'container'>
        <h2 className='text-center'>List of Departments</h2>
        <button className='btn btn-primary mb-2' onClick={addNewDepartment}> Add Department </button>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Department Id</th>
                    <th>Department Name</th>
                    <th>Department Description</th>
                    <th>Actions</th>
                    </tr>
            </thead>
            <tbody>
                {
                    departments.map(department =>
                        <tr key={department.id}>
                            <td>{department.id}</td>
                            <td>{department.departmentName}</td>
                            <td>{department.departmentDesc}</td>
                            <td>
                                <button className='btn btn-info' onClick={()=>updateDepartment(department.id)} 
                                    style={{marginRight: '10px'}}>Update</button> 
                                    <button className='btn btn-danger' onClick={()=>removeDepartment(department.id)}>Delete</button>
                                    </td>
                            </tr>)
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListDepartmentComponent