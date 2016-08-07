import { provideRouter, RouterConfig } from '@angular/router';
import { HomeComponent } from './home';
import { PresentationEditorComponent } from './presentation';

const routes: RouterConfig = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'presentation/new',
    component: PresentationEditorComponent
  }
];

export const appRouterProviders = [
  provideRouter(routes)
]