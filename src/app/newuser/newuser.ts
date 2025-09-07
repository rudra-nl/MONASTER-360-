// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
// import { ApiService } from '../services/api/api';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [RouterLink, RouterOutlet,ReactiveFormsModule, CommonModule, RouterModule],
//   templateUrl: './newuser.html',
//   styleUrls: ['./newuser.css']
// })
// export class Newuser {
//   signupForm: FormGroup;
 
//   constructor(private fb: FormBuilder, private api: ApiService) {
// this.signupForm = this.fb.group({
//     name: this.fb.control<string>('', Validators.required),
//     email: this.fb.control<string>('', [Validators.required, Validators.email]),
//     password: this.fb.control<string>('', [Validators.required, Validators.minLength(6)]),
//     confirmPassword: this.fb.control<string>('', Validators.required)
//   }, { validators: this.passwordMatchValidator });


//   }

  
//   passwordMatchValidator(form: FormGroup) {
//     const password = form.get('password')?.value;
//     const confirmPassword = form.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }

 
//   createAccount() {
//   if (this.signupForm.valid) {
//     const signupData = this.signupForm.value;  // ✅ Declare signupData here

//     this.api.signupUser(signupData).subscribe({
//       next: (res) => {
//         console.log('Account created:', res);
//         alert('Account successfully created! Please login.');
//         // Optionally: navigate to login page
//       },
//       error: (err) => {
//         console.error('Signup error:', err);
//         alert('Failed to create account. Try again.');
//       }
//     });

//   } else {
//     this.signupForm.markAllAsTouched();
//   }
// }



//   signUpWithGoogle() {
//     console.log('Google Sign-Up Clicked');
//     // 👉 Replace with Firebase/Auth0/Custom API
//   }
// }

//  interface SignupForm {
//   name: string;
//   email: string;
//   password: string;
//   confirmPassword: string;
// }



// import { Component } from '@angular/core';
// import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
// import { CommonModule } from '@angular/common';
// import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
// import { ApiService } from '../services/api/api';

// @Component({
//   selector: 'app-signup',
//   standalone: true,
//   imports: [RouterLink, RouterOutlet, ReactiveFormsModule, CommonModule, RouterModule],
//   templateUrl: './newuser.html',
//   styleUrls: ['./newuser.css']
// })
// export class Newuser {

//   signupForm: FormGroup<SignupForm>;

//   constructor(private fb: FormBuilder, private api: ApiService) {
//     this.signupForm = this.fb.group<SignupForm>({
//       name: this.fb.control('', { nonNullable: true, validators: Validators.required }),
//       email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
//       password: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
//       confirmPassword: this.fb.control('', { nonNullable: true, validators: Validators.required })
//     }, { validators: passwordMatchValidator });
//   }

//   createAccount() {
//     if (this.signupForm.valid) {
//       const signupData = this.signupForm.value;

//       this.api.signupUser(signupData).subscribe({
//         next: (res) => {
//           console.log('Account created:', res);
//           alert('Account successfully created! Please login.');
//         },
//         error: (err) => {
//           console.error('Signup error:', err);
//           alert('Failed to create account. Try again.');
//         }
//       });

      

//     } else {
//       this.signupForm.markAllAsTouched();
//     }
//   }

//   signUpWithGoogle() {
//     console.log('Google Sign-Up Clicked');
//     // Replace with OAuth flow
//   }
// }

// function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
//   const password = control.get('password')?.value;
//   const confirmPassword = control.get('confirmPassword')?.value;
//   return password === confirmPassword ? null : { mismatch: true };
// }

// interface SignupForm {
//   name: FormControl<string>;
//   email: FormControl<string>;
//   password: FormControl<string>;
//   confirmPassword: FormControl<string>;
// }

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';
import { ApiService } from '../services/api/api';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, RouterOutlet, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './newuser.html',
  styleUrls: ['./newuser.css']
})
export class Newuser {

  signupForm: FormGroup<SignupForm>;

  constructor(private fb: FormBuilder, private api: ApiService) {
    this.signupForm = this.fb.group<SignupForm>({
      name: this.fb.control('', { nonNullable: true, validators: Validators.required }),
      email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
      confirmPassword: this.fb.control('', { nonNullable: true, validators: Validators.required })
    }, { validators: passwordMatchValidator });
  }

  createAccount() {
    if (this.signupForm.valid) {
      // Extract only the required fields and assert non-null
      // const signupData = {
      //   name: this.signupForm.value.name!,
      //   email: this.signupForm.value.email!,
      //   password: this.signupForm.value.password!
      // };

      const { name, email, password } = this.signupForm.getRawValue();

      const signupData = { name, email, password }; 

      this.api.signupUser(signupData).subscribe({
        next: (res) => {
          console.log('Account created:', res);
          alert('Account successfully created! Please login.');
        },
        error: (err) => {
          console.error('Signup error:', err);
          alert('Failed to create account. Try again.');
        }
      });

    } else {
      this.signupForm.markAllAsTouched();
    }
  }

  signUpWithGoogle() {
    console.log('Google Sign-Up Clicked');
    // TODO: Implement OAuth flow
  }
}

function passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { mismatch: true };
}

interface SignupForm {
  name: FormControl<string>;
  email: FormControl<string>;
  password: FormControl<string>;
  confirmPassword: FormControl<string>;
}

