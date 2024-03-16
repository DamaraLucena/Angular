import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'curso-angular';

  userName = 'DamaraLucena';
  userAddress = 'Francisco celso da silva';
  
  userData = {
    email: 'damara@gmail.com',
    role: 'Admin'
  }

}
