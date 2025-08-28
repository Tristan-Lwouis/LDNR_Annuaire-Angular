import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from "@angular/router";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
            MatToolbarModule, 
            MatIcon,
            MatButtonModule,
            RouterLink, RouterLinkActive,
            
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'annuaire';
}
