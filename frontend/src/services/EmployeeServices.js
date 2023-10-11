import axios from 'axios';


const EMPLOYEE_BASE_REST_API_URL='http://localhost:8080/api/v1/employee';


class EmployeeService{

    getAllEmployee(){
        return axios.get(EMPLOYEE_BASE_REST_API_URL);
    }
    createEmployee(employee){
        return axios.post(EMPLOYEE_BASE_REST_API_URL, employee)
    }
    getAllEmployeeById(employeeId){
        return axios.get(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId);
    }
    updateEmployee(employeeId ,employee){
        return axios.put(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId,employee);
    }
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_BASE_REST_API_URL+'/'+employeeId);
    }
}
export default new EmployeeService();