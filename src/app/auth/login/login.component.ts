import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.signInForm.value);
  }
}
