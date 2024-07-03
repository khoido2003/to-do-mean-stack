import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Login } from '../../../types/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  signInForm = this.fb.group({
    email: ['', [Validators.email]],
    password: ['', Validators.required],
  });

  constructor(
    private readonly fb: FormBuilder,
    private readonly authService: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {}

  onSubmit(): void {
    this.authService.login(this.signInForm.value as Login).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: (error) => console.error('Error logging in:', error),
    });
  }
}
