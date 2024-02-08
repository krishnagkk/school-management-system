import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  // formGroup: FormGroup | any;
  loginForm:FormGroup | any;
  emailFormControl?:string;
  passwordControl?:string;

  // username: string = '';
  // password: string = '';
  errorMessage: string = '';

  constructor(private fb:FormBuilder, private loginService:ServiceService, private router:Router){
    this.loginForm = this.fb.group({
      emailFormControl : new FormControl('', [Validators.required, Validators.email]),
      passwordControl : new FormControl('', [Validators.required])

    })
  }
  ngOnInit(){
    // this.onLogin()
  }

  onLogin(){
    const email = this.loginForm.get('emailFormControl').value;
  const password = this.loginForm.get('passwordControl').value;

  const token = 'eyJhbGciOiJIUzI1NiJ9.eyJSb2xlIjoiQWRtaW4iLCJJc3N1ZXIiOiJJc3N1ZXIiLCJVc2VybmFtZSI6IkphdmFJblVzZSIsImV4cCI6MTcwNzQwMTI1NSwiaWF0IjoxNzA3NDAxMjU1fQ.LorDLHIgdUqXkj7Rf-BKp9NuHwJiU1FA_dp451h1plY'; 

  this.loginService.getUsers(token).subscribe(users => {
    const userDetails = users.find(user => user.username === email && user.password === password);

    if (userDetails) {
      localStorage.setItem('userDetails', JSON.stringify(userDetails));
      localStorage.setItem('token', token);
      console.log('user login successful');
      this.router.navigate(['./Home']);
    } else {
      this.errorMessage = 'Invalid User Details.';
    }
  });
    // this.loginService.getUsers('token').subscribe(users=>{
    //   const email = this.loginForm.get('emailFormControl').value;
    //   const password = this.loginForm.get('passwordControl').value;
      
    //   const userDetails = users.find(user=> 
    //     user.username === email && user.password === password);
        
    //   if(userDetails){
    //     const token = 'abcdef'; // Assuming token comes from some source
    //     localStorage.setItem('userDetails', JSON.stringify(userDetails));
    //     localStorage.setItem('token', token);
    //     this.router.navigate(['./Home'])
        
    //   }else{
    //     this.errorMessage = 'Invalid User Details.'
    //   }
    // })
  }
}
