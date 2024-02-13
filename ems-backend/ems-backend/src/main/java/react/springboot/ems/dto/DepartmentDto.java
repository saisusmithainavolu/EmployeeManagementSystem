package react.springboot.ems.dto;

public class DepartmentDto {

    private Long Id;
    private String departmentName;
    private String departmentDesc;

    public Long getId() {
        return Id;
    }

    public void setId(Long id) {
        Id = id;
    }

    public String getDepartmentName() {
        return departmentName;
    }

    public void setDepartmentName(String departmentName) {
        this.departmentName = departmentName;
    }

    public String getDepartmentDesc() {
        return departmentDesc;
    }

    public void setDepartmentDesc(String departmentDesc) {
        this.departmentDesc = departmentDesc;
    }

    public DepartmentDto() {
    }

    public DepartmentDto(Long id, String departmentName, String departmentDesc) {
        Id = id;
        this.departmentName = departmentName;
        this.departmentDesc = departmentDesc;
    }
}
