// import { Component } from '@angular/core';
// import { FormControl, ReactiveFormsModule } from '@angular/forms';
// import { RouterLink, RouterOutlet } from '@angular/router';

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

@Component({
  selector: 'app-user-login',
  imports: [RouterOutlet,RouterLink,ReactiveFormsModule],
  templateUrl: './user-login.html',
  styleUrl: './user-login.css'
})
export class UserLogin {

  loginForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  displayValue() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value); // you can send this to backend
      alert(`Email: ${this.loginForm.value.email}, Password: ${this.loginForm.value.password}`);
    } else {
      alert('Please fill the form correctly!');
    }
  }
}

