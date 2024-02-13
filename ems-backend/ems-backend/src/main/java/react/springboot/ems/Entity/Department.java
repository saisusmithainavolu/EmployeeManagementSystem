package react.springboot.ems.Entity;


import jakarta.persistence.*;

@Entity
@Table(name="departments")
public class Department {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name="department_name")
    private String departmentName;

    @Column(name="department_description")
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

    public Department() {
    }

    public Department(Long id, String departmentName, String departmentDesc) {
        Id = id;
        this.departmentName = departmentName;
        this.departmentDesc = departmentDesc;
    }
}
