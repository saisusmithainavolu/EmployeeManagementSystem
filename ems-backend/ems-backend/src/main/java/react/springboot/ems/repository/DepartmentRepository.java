package react.springboot.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import react.springboot.ems.Entity.Department;

public interface DepartmentRepository extends JpaRepository<Department,Long> {
}
