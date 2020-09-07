import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../core/auth/auth.service';
import { PlatformDetectorService } from '../../core/plataform//platform-detector.service'

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('userNameInput') userNameInput: ElementRef<HTMLInputElement>

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private router: Router,
              private platformDetectorService: PlatformDetectorService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]

    });
  }

  login() {
    const username = this.loginForm.get('username').value;
    const password = this.loginForm.get('password').value;


    this.authService
      .authenticate(username, password)
      .subscribe(
        () => this.router.navigate(['user', username]),
        err => {
          console.log(err);
          this.loginForm.reset();
          this.platformDetectorService.isPlatformBrowser() &&
          this.userNameInput.nativeElement.focus();
          alert('invalid user name or passoword');
        }
      );
  }



}
