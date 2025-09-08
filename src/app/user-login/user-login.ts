
// @Component({
//   selector: 'app-user-login',
//   imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
//   templateUrl: './user-login.html',
//   styleUrl: './user-login.css'
// })
// export class UserLogin {
//    //Reactive Forms

//   name = new FormControl();
//   password = new FormControl();
//   email = new FormControl();

//   displayValue() {
//     // console.log(this.name.value);
//     console.log(this.email.value);
//     console.log(this.password.value);
//   }
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api/api';

@Component({
  selector: 'app-user-login',
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  displayValue() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.api.loginUser(loginData).subscribe({
        next: (res) => {
          console.log('Login success:', res);
          alert('Login successful!');
          // Optionally: navigate to dashboard/homepage
        },
        error: (err) => {
          console.error('Login error:', err);
          alert('Login failed. Please try again.');
        }
      });

    } else {
      alert('Please fill the form correctly!');
    }
  }
}

