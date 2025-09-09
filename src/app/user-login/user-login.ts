import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { ApiService } from '../services/api/api';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink, RouterModule, ReactiveFormsModule],
  templateUrl: './user-login.html',
  styleUrls: ['./user-login.css'],
})
export class UserLogin {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  displayValue() {
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;

      this.api.loginUser(loginData).subscribe({
        next: (res) => {
          console.log('Login success:', res);
          alert('Login successful!');
          this.router.navigate(['/explore']);
        },
        error: (err) => {
          console.error('Login error:', err);
          alert(`Login failed: ${err.message || 'Please try again.'}`);
        },
      });
    } else {
      this.loginForm.markAllAsTouched();
      alert('Please fill the form correctly!');
    }
  }
}