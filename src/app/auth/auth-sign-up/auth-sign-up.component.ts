import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-auth-sign-up',
  templateUrl: './auth-sign-up.component.html',
  styleUrls: ['./auth-sign-up.component.css']
})
export class AuthSignUpComponent implements OnInit {
  userForm: FormGroup;

  user: User;
  roles: string[];
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
  ) {

  }
  signUp(user): void {
    this.authService.login(user.role);
    this.toastrService.success('Successfully signed up')
  }



  cancelCreation() {
    console.log('Cancelando ...');
    this.userForm.reset();
  }

  ngOnInit() {
    this.userForm = this.formBuilder.group({
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      role: ['Client', [Validators.required]],
    });
    this.user = new User();
    this.roles = ['Administrator', 'Client'];
  }
}
