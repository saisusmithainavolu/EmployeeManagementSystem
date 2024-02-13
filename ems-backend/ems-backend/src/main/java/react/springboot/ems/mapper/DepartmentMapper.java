package react.springboot.ems.mapper;

import react.springboot.ems.Entity.Department;
import react.springboot.ems.dto.DepartmentDto;

public class DepartmentMapper {

    // convert department jpa entity into department dto
    public static DepartmentDto mapToDepartmentDto(Department department){

        return new DepartmentDto(department.getId(), department.getDepartmentName(),department.getDepartmentDesc());
    }

    // convert department dto into department jpa entity
    public static Department mapToDepartment(DepartmentDto departmentDto){

        return new Department(departmentDto.getId(), departmentDto.getDepartmentName(),departmentDto.getDepartmentDesc());
    }

}
