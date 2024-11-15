import { Component } from '@angular/core';
import {Bet} from './bet';

@Component({
  selector: 'app-bet',
  templateUrl: './bet.component.html',
  styleUrls: ['./bet.component.css'],
  standalone: true
})
export class BetComponent {
  title = "Bienvenue dans la partie de pari sportif d'Univape";
  description = 'Choisissez votre pari et maximisez vos gains !';

  betOptions: Bet[] = [
    { id: 1, name: 'Équipe A vs Équipe B', cote: 1.5 },
    { id: 2, name: 'Équipe C vs Équipe D', cote: 2.1 },
    { id: 3, name: 'Équipe E vs Équipe F', cote: 1.8 }
  ];
}
