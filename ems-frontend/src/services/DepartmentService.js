// this file helps to make a call to REST API using axios library

import axios from "axios";

// Calling get all departments REST API
const DEPARTMENT_REST_API_BASE_URL = "http://localhost:8080/api/departments";

export const listDepartments = () =>  axios.get(DEPARTMENT_REST_API_BASE_URL);

// Calling create department REST API
export const addDepartment = (department) => axios.post(DEPARTMENT_REST_API_BASE_URL,department);

// Calling get department by ID REST API
export const getDepartmentById = (departmentId) => axios.get(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId);

// Calling update department REST API
export const updateDepartment = (departmentId, department) => axios.put(DEPARTMENT_REST_API_BASE_URL + '/' + departmentId, department);

// Calling delete department by id REST API
export const deleteDepartment = (id) => axios.delete(DEPARTMENT_REST_API_BASE_URL + '/' + id);


