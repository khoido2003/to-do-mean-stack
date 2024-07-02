import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [LoginComponent, AuthLayoutComponent, RegisterComponent, WelcomeComponent],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
