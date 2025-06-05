import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Carrinho } from './pages/carrinho/carrinho';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'home', component: Home},
    {path: 'sobre', component: Sobre},
    {path: 'carrinho', component: Carrinho}
];
