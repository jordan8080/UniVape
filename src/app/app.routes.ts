import { Routes } from '@angular/router';
import {BetComponent} from './bet/bet.component';
import {ProductComponent} from './product/product.component';

export const routes: Routes = [
  { path: 'bet', component: BetComponent }, // Route /bet
  { path: 'product', component: ProductComponent } // Route /bet

];
