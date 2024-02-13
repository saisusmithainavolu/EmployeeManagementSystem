package react.springboot.ems.Controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import react.springboot.ems.dto.DepartmentDto;
import react.springboot.ems.service.DepartmentService;

import java.util.List;

// "*" indicates that all the clients can call this Rest API
@CrossOrigin("*")
@RestController
@RequestMapping("/api/departments")
public class DepartmentController {

    private DepartmentService departmentService;

    public DepartmentController(DepartmentService departmentService) {
        this.departmentService = departmentService;
    }

    // create department REST API
    @PostMapping
    public ResponseEntity<DepartmentDto> createDepartment(@RequestBody DepartmentDto departmentDto ){
        DepartmentDto savedDepartment = departmentService.createDepartment(departmentDto);

        return new ResponseEntity<>(savedDepartment, HttpStatus.CREATED);
    }

    // Get department by ID REST API
    @GetMapping("{id}")
    public ResponseEntity<DepartmentDto> getDepartmentById(@PathVariable("id") Long Id){
        DepartmentDto departmentDto = departmentService.getDepartmentById(Id);
        return ResponseEntity.ok(departmentDto);
    }

    // Get all departments REST API
    @GetMapping()
    public ResponseEntity<List<DepartmentDto>> getAllDepartment(){
        List<DepartmentDto> departments = departmentService.getAllDepartment();
        return ResponseEntity.ok(departments);
    }

    // Update department by ID REST API
    @PutMapping("{id}")
    public ResponseEntity<DepartmentDto> updateDepartment(@PathVariable("id") Long Id,@RequestBody DepartmentDto departmentDto){
        DepartmentDto department = departmentService.updateDepartment(Id,departmentDto);
        return ResponseEntity.ok(department);
    }

    // Delete department by ID REST API
    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteDepartment(@PathVariable("id") Long Id){
        departmentService.deleteDepartment(Id);
        return ResponseEntity.ok("Department deleted successfully");
    }

}
