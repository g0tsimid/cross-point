import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { PresentationEditorComponent } from './presentation';

const appRoutes: Routes = [
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

export const routing = RouterModule.forRoot(appRoutes);