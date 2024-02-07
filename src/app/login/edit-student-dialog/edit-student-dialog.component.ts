import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddStudentDialogComponent } from '../add-student-dialog/add-student-dialog.component';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-edit-student-dialog',
  templateUrl: './edit-student-dialog.component.html',
  styleUrls: ['./edit-student-dialog.component.scss']
})
export class EditStudentDialogComponent {
  studentForm: FormGroup;
  isFormValid: boolean = false; 
  editStudentDetails: any={};

  constructor(private fb:FormBuilder, public dialogRef: MatDialogRef<AddStudentDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, ){
    this.studentForm = this.fb.group({
      name: ['',Validators.required],
      fatherName: ['',Validators.required],
      class_name: ['',Validators.required],
      roll_no: ['',Validators.required],
      year: ['',Validators.required],
      contactDetails: ['',Validators.required]
    })
    this.studentForm.valueChanges.subscribe(() => {
      this.isFormValid = this.studentForm.valid;
    });
    console.log(data,'edit data');
    
  }

  onUpdateStudent(){
    if(this.studentForm.valid){
      this.isFormValid = true;
      this.editStudentDetails = this.studentForm.value;
      // this.newStudentDetails.push(this.studentForm.value);
      console.log(this.editStudentDetails,'excisting');
      this.dialogRef.close(this.editStudentDetails);
    } else{
       return;
    }
  }

  onCancel(){
    this.dialogRef.close();
  }

  onFileSelected(event:any){

  }
}
