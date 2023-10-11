import React, { useEffect, useState } from 'react'
import EmployeeServices from '../services/EmployeeServices';
import { Link } from 'react-router-dom';

const ListEmployeeComponent = () => {
    const [employee, setEmployee]=useState([]);
    
    useEffect(() => {
        getAllEmployee();
      
    }, [])
    const getAllEmployee =()=>{
        EmployeeServices.getAllEmployee().then((response)=>{
            setEmployee(response.data);
            console.log(response.data);
        }).catch(error =>{
            console.log(error);
        })

    }
    const deleteEmployee =(employeeId)=>{
        EmployeeServices.deleteEmployee(employeeId).then((response)=>{
            getAllEmployee();

        }).catch(error=>{
            console.log(error);
        })
    }
    



  return (
    <div className="container">
        <h2 className="text-center">List of Employee</h2>
        <Link to="/add-employee" className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Employee Id </th>
                <th>Employee First Name</th>
                <th>Employee Last Name</th>
                <th>Employee Email Id</th>
                <th>Actios</th>
            </thead>
            <tbody>
                {
                    employee.map(
                        employee =>
                            <tr key={employee.id}>
                                <td>{employee.id}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.emailId}</td>
                                <td>
                                    <Link className='btn btn-info' to={`/edit-employee/${employee.id}`}>Update</Link>
                                    <button className='btn btn-danger '
                                    style={{marginLeft:'15px'}} onClick={()=> deleteEmployee(employee.id)}>Delete</button>
                                </td>
                                
                            </tr>
                        
                    )
                }
            </tbody>
        </table>
    </div>
  )
}

export default ListEmployeeComponent