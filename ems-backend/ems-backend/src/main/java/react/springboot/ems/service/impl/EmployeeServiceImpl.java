package react.springboot.ems.service.impl;

import org.springframework.stereotype.Service;
import react.springboot.ems.Entity.Department;
import react.springboot.ems.Entity.Employee;
import react.springboot.ems.dto.EmployeeDto;
import react.springboot.ems.exception.ResourceNotFoundException;
import react.springboot.ems.repository.DepartmentRepository;
import react.springboot.ems.repository.EmployeeRepository;
import react.springboot.ems.mapper.EmployeeMapper;
import react.springboot.ems.service.EmployeeService;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;
    private DepartmentRepository departmentRepository;

    public EmployeeServiceImpl(EmployeeRepository employeeRepository, DepartmentRepository departmentRepository) {
        this.employeeRepository = employeeRepository;
        this.departmentRepository = departmentRepository;
    }

    @Override
    public EmployeeDto createEmployee(EmployeeDto employeeDto) {

        Employee employee = EmployeeMapper.maptoEmployee(employeeDto);

        Department department = departmentRepository.findById(employeeDto.getDepartmentId()).orElseThrow(()->
                        new ResourceNotFoundException("Department  doesn't exist with given ID :"+employeeDto.getDepartmentId()));
        employee.setDepartment(department);

        Employee savedEmployee = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(savedEmployee);

    }

    @Override
    public EmployeeDto getEmployeeById(Long Id) {

        Employee employee = employeeRepository.findById(Id)
                .orElseThrow(()->new ResourceNotFoundException("Employee doesn't exist with given ID :"+Id));

        return EmployeeMapper.mapToEmployeeDto(employee);
    }

    @Override
    public List<EmployeeDto> getAllEmployees() {

        List<Employee> employees = employeeRepository.findAll();
        return employees.stream().map(e -> EmployeeMapper.mapToEmployeeDto(e)).collect(Collectors.toList());
    }

    @Override
    public EmployeeDto updateEmployee(EmployeeDto updatedEmployee, Long Id) {
        Employee employee = employeeRepository.findById(Id)
                .orElseThrow(()->new ResourceNotFoundException("Employee doesn't exist with given ID :"+Id));

        employee.setFirstName(updatedEmployee.getFirstName());
        employee.setLastName(updatedEmployee.getLastName());
        employee.setEmail(updatedEmployee.getEmail());

        Department department = departmentRepository.findById(updatedEmployee.getDepartmentId()).orElseThrow(()->
                new ResourceNotFoundException("Department  doesn't exist with given ID :"+updatedEmployee.getDepartmentId()));
        employee.setDepartment(department);

        Employee updatedEmployeeObj = employeeRepository.save(employee);

        return EmployeeMapper.mapToEmployeeDto(updatedEmployeeObj);
    }

    @Override
    public Void deleteEmployee(Long Id) {
        Employee employee = employeeRepository.findById(Id)
                .orElseThrow(()->new ResourceNotFoundException("Employee doesn't exist with given ID :"+Id));

        employeeRepository.deleteById(Id);

        return null;
    }
}
