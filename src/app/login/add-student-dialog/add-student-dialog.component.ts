import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-student-dialog',
  templateUrl: './add-student-dialog.component.html',
  styleUrls: ['./add-student-dialog.component.scss']
})
export class AddStudentDialogComponent {
  studentForm: FormGroup;
  isFormValid: boolean = false; 
  newStudentDetails: any={};
  selectedImage?: string | ArrayBuffer | null;

  constructor(private fb:FormBuilder, private studentService:ServiceService, public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ){
    this.studentForm = this.fb.group({
      name: ['',Validators.required],
      fatherName: ['',Validators.required],
      class_name: ['',Validators.required],
      roll_no: ['',Validators.required],
      year: ['',Validators.required],
      mobile: ['',Validators.required],
      // grades: this.fb.group({
        Math: ['',Validators.required],
        Science: ['',Validators.required],
        English: ['',Validators.required],
        History: ['',Validators.required],
        image:['']
      // })
    })
    this.studentForm.valueChanges.subscribe(() => {
      this.isFormValid = this.studentForm.valid;
    });
  }

  onAddStudent(){
    if(this.studentForm.valid){
      this.isFormValid = true;
      this.newStudentDetails = this.studentForm.value;
      // this.newStudentDetails.push(this.studentForm.value);
      // console.log(this.newStudentDetails,'excisting');
      this.dialogRef.close(this.newStudentDetails);
    } else{
       return;
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

  onFileSelected(event:any){
    const file: File = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        this.selectedImage = reader.result;
      };
    }
  }
}
