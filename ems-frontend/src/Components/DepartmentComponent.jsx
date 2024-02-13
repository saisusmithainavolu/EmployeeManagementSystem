import React, { useEffect, useState } from 'react'
import { addDepartment, getDepartmentById, updateDepartment } from '../services/DepartmentService';
import { useNavigate, useParams } from 'react-router-dom';

const DepartmentComponent = () => {

    const [departmentName, setdepartmentName] = useState('')
    const [departmentDesc, setdepartmentDesc] = useState('')

    const navigator = useNavigate();

    const {id} = useParams();

    function saveOrUpdateDepartment(e){
        e.preventDefault();
        const department = { departmentName, departmentDesc }
        console.log(department); 

        if(id){
            updateDepartment(id,department).then((response) => { 
                console.log(response.data); 
                navigator('/departments')
        }).catch(error => {
            console.error(error);
        })
        } else { 
        addDepartment(department).then((response) => { 
            console.log(response.data); 
            navigator('/departments')
        }).catch(error => {
            console.error(error);
        })
        }
}

useEffect(() => {
    if(id){
        getDepartmentById(id).then((response) => {
            setdepartmentName(response.data.departmentName)
            setdepartmentDesc(response.data.departmentDesc)
        }).catch(error => {
            console.error(error);
        })
    }
}, [id])

function pageTitle(){
    if(id){
        return <h2 className='text-center'> Update Department</h2>
    } else{
        return <h2 className='text-center'> Add Department</h2>
    }
}



  return (
    <div className='container'>
         <br></br>
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            {
                    pageTitle()
            }
                <div class-name='card-body'>
                    <form>
                        <div className='form-group mb-2'>
                        <label className='form-label'> Department Name: </label>
                            <input 
                            type='text' 
                            placeholder='Enter Department name' 
                            name='departmentName' 
                            value={departmentName} 
                            className='form-control'
                            onChange={(e)=>setdepartmentName(e.target.value)}
                            >                                
                            </input>
                             </div> 
                        
                        <div className='form-group mb-2'>
                            <label className='form-label'> Department Description: </label>
                            <input 
                            type='text' 
                            placeholder='Enter Department Description' 
                            name='departmentDesc' 
                            value={departmentDesc} 
                            className='form-control'
                            onChange={(e)=>setdepartmentDesc(e.target.value)}
                            >                                
                            </input>
                            <button className='btn btn-success' onClick={(e)=>saveOrUpdateDepartment(e)} >Submit</button>
                        </div>
                    </form>
                </div>
            </div>

        </div>


    </div>
  )
}

export default DepartmentComponent