import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators, ReactiveFormsModule, ValidationErrors, AbstractControl } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../services/api/api';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './newuser.html',
  styleUrls: ['./newuser.css'],
})
export class Newuser {
  signupForm: FormGroup<SignupForm>;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.signupForm = this.fb.group<SignupForm>({
      name: this.fb.control('', { nonNullable: true, validators: Validators.required }),
      email: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.email] }),
      password: this.fb.control('', { nonNullable: true, validators: [Validators.required, Validators.minLength(6)] }),
      confirmPassword: this.fb.control('', { nonNullable: true, validators: Validators.required }),
    }, { validators: passwordMatchValidator });
  }

  createAccount() {
    if (this.signupForm.valid) {
      const { name, email, password } = this.signupForm.getRawValue();
      const signupData = { username:name, email, password };

      this.api.signupUser(signupData).subscribe({
        next: (res) => {
          console.log('Account created:', res);
          alert('Account successfully created! Please login.');
          this.router.navigate(['/explore']);
        },
        error: (err) => {
          console.error('Signup error:', err);
          alert(`Failed to create account: ${err.message || 'Please try again.'}`);
        },
      });
    } else {
      this.signupForm.markAllAsTouched();
    }
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
