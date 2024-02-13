// this file helps to make a call to REST API using axios library

import axios from "axios";

// Calling get all employees REST API
const REST_API_BASE_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => {
    return axios.get(REST_API_BASE_URL);
}

// Calling create employee REST API
export const addEmployee = (employee) => axios.post(REST_API_BASE_URL,employee);

// Calling get employee by id REST API
export const getEmployee = (id) => axios.get(REST_API_BASE_URL + '/' + id);

// Calling update employee by id REST API
export const updateEmployee = (id,employee) => axios.put(REST_API_BASE_URL + '/' + id, employee);

// Calling delete employee by id REST API
export const deleteEmployee = (id) => axios.delete(REST_API_BASE_URL + '/' + id);

