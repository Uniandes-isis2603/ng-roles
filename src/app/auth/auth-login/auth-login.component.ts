import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from '../auth.service';
import { User } from '../user';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})
export class AuthLoginComponent implements OnInit {
  userForm: FormGroup;

  user: User;
  roles: string[];
  constructor(
    private formBuilder: FormBuilder,
    private toastrService: ToastrService,
    private authService: AuthService,
  ) {

  }
  login(user): void {
    this.authService.login(user.role);
    this.toastrService.success('Successfully login')
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
