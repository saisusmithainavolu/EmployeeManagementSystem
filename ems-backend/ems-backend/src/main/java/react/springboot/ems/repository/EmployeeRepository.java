package react.springboot.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import react.springboot.ems.Entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {


}
