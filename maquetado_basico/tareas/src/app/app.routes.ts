import { Routes } from '@angular/router';

// Importamos los componentes desde sus nuevas ubicaciones
import { Bienvenida } from './pages/bienvenida/bienvenida';
import { SobreMi } from './pages/sobre-mi/sobre-mi';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/bienvenida',
    pathMatch: 'full',
  },
  {
    path: 'bienvenida',
    component: Bienvenida,
    title: 'Bienvenida',
  },
  {
    path: 'sobre-mi',

    component: SobreMi,
    title: 'Sobre Mí',
  },
  {
    path: 'auth',
    loadComponent: () => import('./pages/auth/auth').then((m) => m.Auth),
    loadChildren: () => import('./pages/auth/auth.routes').then((routes) => routes.authRoutes),
  },
  {
    path: '**',
    loadComponent: () => import('./pages/error/error').then((m) => m.Error),
  },
];
