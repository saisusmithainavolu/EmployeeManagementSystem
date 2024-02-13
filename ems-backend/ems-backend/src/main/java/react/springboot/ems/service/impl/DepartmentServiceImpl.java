package react.springboot.ems.service.impl;

import org.springframework.stereotype.Service;
import react.springboot.ems.Entity.Department;
import react.springboot.ems.Entity.Employee;
import react.springboot.ems.dto.DepartmentDto;
import react.springboot.ems.exception.ResourceNotFoundException;
import react.springboot.ems.mapper.DepartmentMapper;
import react.springboot.ems.mapper.EmployeeMapper;
import react.springboot.ems.repository.DepartmentRepository;
import react.springboot.ems.service.DepartmentService;

import java.util.List;
import java.util.stream.Collectors;


@Service
public class DepartmentServiceImpl implements DepartmentService {

    DepartmentRepository departmentRepository;


    public DepartmentServiceImpl(DepartmentRepository departmentRepository) {
        this.departmentRepository = departmentRepository;
    }

    @Override
    public DepartmentDto createDepartment(DepartmentDto departmentDto) {

        Department department = DepartmentMapper.mapToDepartment(departmentDto);

        Department savedDepartment = departmentRepository.save(department);

        return DepartmentMapper.mapToDepartmentDto(savedDepartment);
    }

    @Override
    public DepartmentDto getDepartmentById(Long Id) {

        Department department = departmentRepository.findById(Id)
                .orElseThrow(()->new ResourceNotFoundException("Department doesn't exist with given ID :"+Id));

        return DepartmentMapper.mapToDepartmentDto(department);

    }

    @Override
    public List<DepartmentDto> getAllDepartment() {

         List<Department> departments =  departmentRepository.findAll();
        return departments.stream().map(d -> DepartmentMapper.mapToDepartmentDto(d)).collect(Collectors.toList());

    }

    @Override
    public DepartmentDto updateDepartment(Long Id, DepartmentDto departmentDto) {

        Department department = departmentRepository.findById(Id)
                .orElseThrow(()->new ResourceNotFoundException("Department doesn't exist with given ID :"+Id));

        department.setDepartmentName(departmentDto.getDepartmentName());
        department.setDepartmentDesc(departmentDto.getDepartmentDesc());

        Department updatedDepartment = departmentRepository.save(department);

        return DepartmentMapper.mapToDepartmentDto(updatedDepartment);

    }

    @Override
    public void deleteDepartment(Long Id) {
        Department department = departmentRepository.findById(Id)
                .orElseThrow(()->new ResourceNotFoundException("Department doesn't exist with given ID :"+Id));
        departmentRepository.deleteById(Id);
    }
}
