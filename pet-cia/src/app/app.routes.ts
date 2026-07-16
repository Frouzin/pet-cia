import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Sobre } from './pages/sobre/sobre';
import { Catalogo } from './pages/catalogo/catalogo';
import { Contato } from './pages/contato/contato';

export const routes: Routes = [
  { path: '', component: Home, title: 'Pet&Cia — Ração e Acessórios para o seu Pet' },
  { path: 'sobre', component: Sobre, title: 'Sobre a loja — Pet&Cia' },
  { path: 'catalogo', component: Catalogo, title: 'Catálogo — Pet&Cia' },
  { path: 'contato', component: Contato, title: 'Contato & Localização — Pet&Cia' },
  { path: '**', redirectTo: '' },
];
