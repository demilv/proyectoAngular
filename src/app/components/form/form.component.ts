import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators  } from '@angular/forms';
import { Userlog } from '../../models/login';
import { Router } from '@angular/router';
import { comparePassword } from './passValidator';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  userlog: Userlog[] = [];  
  public showError: boolean = false;
  public password: string = ""; 

  public userlogForm!: FormGroup;
  public submitted: boolean = false;

  
  
    constructor(private formBuilder: FormBuilder, private router: Router) {
      
        this.userlogForm = this.formBuilder.group({
          name: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(3),]],
          password: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          passwordRepeat: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
        },
        {
          validator: comparePassword('password', 'passwordRepeat')
        });
     }

  ngOnInit() {}
  public onSubmit(): void {
    this.submitted = true;
  if (this.userlogForm.valid) {
    const token = 'tokenlogin';
    localStorage.setItem('token', token);
    this.router.navigate(['/list']);
  }
}

  public isLoggedIn(): boolean {
    const token = localStorage.getItem('token');
    return token !== null;
  }
}
