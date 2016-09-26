import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home';

const appRoutes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  }
];

export const appRoutingProviders: any[] = [
  
];

export const routing = RouterModule.forRoot(appRoutes);
