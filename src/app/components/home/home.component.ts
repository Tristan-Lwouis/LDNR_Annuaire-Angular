import { Component } from '@angular/core';
import { MatIcon } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { DatePipe } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router'; 
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-home',
  imports: [
    MatIcon,
    MatCardModule,
    DatePipe,
    RouterLink,
    RouterLinkActive,
    MatButtonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 aujourdhui : Date = new Date();
}
