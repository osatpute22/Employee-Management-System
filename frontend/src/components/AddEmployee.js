import React, { useState,useEffect } from 'react'
import {Link, useNavigate ,useParams} from 'react-router-dom';
import EmployeeService from '../services/EmployeeServices';

const AddEmployee = () => {

    const [firstName, setfirstName] = useState('');
    const [lastName, setlastName] = useState('');
    const [emailId, setemailId] = useState('');
    const navigate=useNavigate();
    const {id}=useParams();

    const saveOrUpdateEmployee = (e) => {
        e.preventDefault();

        const employee = {firstName, lastName, emailId}

        if(id){
            EmployeeService.updateEmployee(id, employee).then((response) => {
                navigate.push('/employee')
            }).catch(error => {
                console.log(error)
            })

        }else{
            EmployeeService.createEmployee(employee).then((response) =>{

                console.log(response.data)
    
                navigate.push('/employee');
    
            }).catch(error => {
                console.log(error)
            })
        }
        
    }
    useEffect(() => {
        EmployeeService.getAllEmployeeById(id).then((response)=>{
            setfirstName(response.data.firstName)
            setlastName(response.data.lastName)
            setemailId(response.data.emailId)
        }).catch(error=>{
            console.log(error)
        })
      
    }, [])

    const title = ()=>{
        if(id){
            return <h2 className='text-center'>Update Employee </h2>
        }
        else{
            return <h2 className='text-center'>Update Employee </h2>
        }
    }
    


  return (
    <div>
        <br></br>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    {
                        title()
                    }
                    <div className="card-body">
                        <form >
                            <div className='form-group mb-2'>
                                <label className='from-label'>fisrt name</label>
                                <input type='text' 
                                placeholder='Enter First Name'
                                className='form-control'
                                value={firstName}
                                onChange={(e)=> setfirstName(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='from-label'>lastt name</label>
                                <input type='text' 
                                placeholder='Enter last Name'
                                className='form-control'
                                value={lastName}
                                onChange={(e)=> setlastName(e.target.value)}>
                                </input>
                            </div>
                            <div className='form-group mb-2'>
                                <label className='from-label'>email id </label>
                                <input type='text' 
                                placeholder='Enter email id'
                                className='form-control'
                                value={emailId}
                                onChange={(e)=> setemailId(e.target.value)}>
                                </input>
                            </div>
                            <button toclassName='btn btn-success' onClick= { (e) =>saveOrUpdateEmployee(e)}>Save</button>
                            <Link to="/employee" className='btn btn-danger'>Cancel</Link>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddEmployee