import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-view-student-dialog',
  templateUrl: './view-student-dialog.component.html',
  styleUrls: ['./view-student-dialog.component.scss']
})
export class ViewStudentDialogComponent {
  
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<any>) { }

  ngOnInit(){
    // console.log(this.data,'view detail');
    
  }
  onCancel(){
    this.dialogRef.close();
  }
}
