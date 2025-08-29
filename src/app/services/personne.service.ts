import { Injectable } from '@angular/core';
import { Personne } from '../models/personne';

@Injectable({
  providedIn: 'root'
})
export class PersonneService {
  private personnes : Personne[] = [
    { id: 1, prenom: 'Corey', nom: 'Taylor', tel: '0123456789' },
    { id: 2, prenom: 'Mike', nom: 'Thompson', tel: '9876543210' }
  ];
  constructor() { }

    // Méthode pour récupérer la liste des personnes
    getPersonnes(): Personne[] {
    return this.personnes;
  }
}
