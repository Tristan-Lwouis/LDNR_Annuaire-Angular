import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PersonneListerComponent } from './components/personne-lister/personne-lister.component';
import { PersonneAjouterComponent } from './components/personne-ajouter/personne-ajouter.component';
import { PersonneModifierComponent } from './components/personne-modifier/personne-modifier.component';
import { AProposComponent } from './components/a-propos/a-propos.component';
import { PageIntrouvableComponent } from './components/page-introuvable/page-introuvable.component';

export const routes: Routes = [
    //Si l'url est vide, on redirige vers le component home
    {path: '', component: HomeComponent},
    {path: 'lister-personne', component: PersonneListerComponent},
    {path: 'ajouter-personne', component: PersonneAjouterComponent},
    {path: 'modifier-personne', component: PersonneModifierComponent},
    {path: 'a-propos', component: AProposComponent},
    {path: '**', component: PageIntrouvableComponent}
];
