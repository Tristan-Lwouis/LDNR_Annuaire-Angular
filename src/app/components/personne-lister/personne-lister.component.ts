import { Component } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { Personne } from '../../models/personne';
import { PersonneService } from '../../services/personne.service';

@Component({
  selector: 'app-personne-lister',
  imports: [
    NgFor,
    CommonModule
  ],
  templateUrl: './personne-lister.component.html',
  styleUrl: './personne-lister.component.scss'
})
export class PersonneListerComponent {
  // personnes : Personne[] = [
  //     { id: 1, prenom: 'Corey', nom: 'Taylor', tel: '0123456789' },
  //     { id: 2, prenom: 'Mike', nom: 'Thompson', tel: '9876543210' }
  //   ];

  // Création d'un tableau de personnes vide
  personnes: Personne[] = [];

  // Injection du service dans le constructeur
  constructor(private ps: PersonneService) {
    this.personnes = ps.getPersonnes();
  }
}
