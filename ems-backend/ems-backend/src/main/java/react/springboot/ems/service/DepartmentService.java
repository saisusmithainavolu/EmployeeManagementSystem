package react.springboot.ems.service;

import react.springboot.ems.dto.DepartmentDto;

import java.util.List;

public interface DepartmentService {

    DepartmentDto createDepartment(DepartmentDto departmentDto);

    DepartmentDto getDepartmentById(Long Id);

    List<DepartmentDto> getAllDepartment();

    DepartmentDto updateDepartment(Long Id, DepartmentDto departmentDto);

    void deleteDepartment(Long Id);

}
