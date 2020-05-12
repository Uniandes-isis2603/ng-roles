import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.service';

/**
 * The app component. This component is the base of the Clientstore
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService) { }
  /**
   * The title that appears on the NavBar and the web browser
   */
  title: string;

  /**
   * Assigns a title to the web page
   */
  ngOnInit(): void {
    this.title = 'Tutorial roles';
    this.authService.start();
  }



  logout(): void {
    this.authService.logout()
  }

}
