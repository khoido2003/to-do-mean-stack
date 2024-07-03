import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss',
})
export class WelcomeComponent implements OnInit {
  constructor(
    private readonly http: HttpClient,
    private readonly authService: AuthService
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn().subscribe({
      next(v) {
        console.log(v);
      },
      error(err) {
        console.log(err);
      },
    });
  }
}
