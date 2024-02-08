import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { MatTableDataSource } from '@angular/material/table';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { EditStudentDialogComponent } from '../edit-student-dialog/edit-student-dialog.component';
import { ViewStudentDialogComponent } from '../view-student-dialog/view-student-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  selectForm: FormGroup;
  editForm: FormGroup;
  primarySecondary: any[] = [];
  years: any[] = []; 
  classes: any[] = []; 
  isFormValid: boolean = false;
  displayTable: boolean = false;

  displayedColumns: string[] = ['position','photo', 'name', 'rollno', 'classname','year','actions'];
  dataSource = new MatTableDataSource<any>();
  
  studentsDataSource:any[]= []
  filteredYears: any[] = [];
  filteredClass: any[] = [];
  element: any;

  constructor(private fb:FormBuilder, private studentService:ServiceService,private dialog: MatDialog){
    this.selectForm = this.fb.group({
      selectedType: ['', Validators.required],  
      selectedYear: ['', Validators.required],  
      selectedClass: ['', Validators.required]
    });

    this.editForm = this.fb.group({
      image: ['',Validators.required],
      name: ['', Validators.required],
      roll_no: ['', Validators.required],
      class_name: ['', Validators.required],
      year: ['', Validators.required]
    })

    this.selectForm.valueChanges.subscribe(() => {
      this.isFormValid = this.selectForm.valid;
    });
  }

  ngOnInit() {
     this.primarySecondary = this.studentService.getPrimarySecondary();
    //  console.log(this.primarySecondary,'primary');
     this.years = this.studentService.getYears();
    //  console.log(this.years,'years');
     this.classes = this.studentService.getStudentDetails();
    //  console.log(this.classes,'classes');
     
  }

  onTypeChange() {
    const selectedType = this.selectForm.get('selectedType')?.value;
    this.filteredYears = this.years.filter(year => year.primarySecondary === selectedType);
    // console.log(this.filteredYears,'filterse');
    
  }

  onYearChange() {
    const selectedYear = this.selectForm.get('selectedYear')?.value;
    this.filteredClass = this.classes.filter(name => name.year === selectedYear);    
    // console.log(this.filteredClass,'filteredClass');
  }

  onClassChange(){
    
  }

  addStudent(){
    const dialogRef = this.dialog.open(AddStudentDialogComponent, {
      width:'40%',
      data: {} 
    });

    dialogRef.afterClosed().subscribe(result => {
      // console.log(result,'this.result');
      if (result) {
        this.dataSource.data.push(result); 
        this.dataSource.data = [...this.dataSource.data];
        // console.log(this.dataSource.data, 'close dilaog data');
        
      }
    });
  }

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file) {
      this.editForm.get('image')?.setValue(file);
    }
  }

  editStudent(element:any){
    element.editMode = !element.editMode;

    if (element.editMode) {
      this.editForm.setValue({
        image: element.image,
        name: element.name,
        roll_no: element.roll_no,
        class_name: element.class_name,
        year: element.year
      });
    }
  }

  saveChanges(element: any) {
    // Update the row element with the changes made in the form
    if (this.editForm.valid) {
      element.image = this.editForm.value.image;
      element.name = this.editForm.value.name;
      element.roll_no = this.editForm.value.roll_no;
      element.class_name = this.editForm.value.class_name;
      element.year = this.editForm.value.year;
      
      // Toggle off edit mode after saving changes
      element.editMode = false;
    }
  }

  cancelEditMode(element: any) {
    element.editMode = false;
  }

  deleteStudent(student: any){
    const indexStudent = this.dataSource.data.indexOf(student)
    if(indexStudent > -1){
      this.dataSource.data.splice(indexStudent, 1);
      this.dataSource.data = [...this.dataSource.data]
    }
  }

  viewStudent(student: any){
    const selectedStudent = this.dataSource.data.find((s: any) => s.id === student.id);
    const dialogRef = this.dialog.open(ViewStudentDialogComponent, {
      width: '40%',
      data: selectedStudent
    });
  
    dialogRef.afterClosed().subscribe(result => {
      // Handle any closing actions if needed
    });
  }
 
  logOut(){
    
  }

  onSubmit(){
    if (this.selectForm.valid) {
      const selectedYear = this.selectForm.get('selectedYear')?.value;
      const selectedClass = this.selectForm.get('selectedClass')?.value;
       
      this.dataSource.data = this.classes.filter(cls=> cls.year === selectedYear && cls.class_name === selectedClass)
      console.log(this.dataSource.data,'filter student data');
      
      this.isFormValid = true;
      this.displayTable = true;
      console.log('Form submitted!');
    } else {
      console.log('Form is invalid!');
    }
    
  }

}
