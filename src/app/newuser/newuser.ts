import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterOutlet,ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './newuser.html',
  styleUrls: ['./newuser.css']
})
export class Newuser {
  signupForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }

  
  passwordMatchValidator(form: FormGroup) {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

 
  createAccount() {
    if (this.signupForm.valid) {
      console.log('Form Submitted:', this.signupForm.value);
      //  Replace this with API call to backend
    } else {
      this.signupForm.markAllAsTouched();
    }
  }


  signUpWithGoogle() {
    console.log('Google Sign-Up Clicked');
    // 👉 Replace with Firebase/Auth0/Custom API
  }
}

