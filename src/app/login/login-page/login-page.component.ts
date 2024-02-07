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
    this.loginService.getUsers().subscribe(users=>{
      const email = this.loginForm.get('emailFormControl').value;
      const password = this.loginForm.get('passwordControl').value;
      
      const userDetails = users.find(user=> 
        user.username === email && user.password === password);
        
      if(userDetails){
        console.log('user login successful');
        this.router.navigate(['./login/Home'])
        
      }else{
        this.errorMessage = 'Invalid User Details'
      }
    })
  }
}
