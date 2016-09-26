import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PresentationEditorComponent } from './presentation-editor';

const presentationRoutes: Routes = [
  { path: 'presentation/new', component: PresentationEditorComponent }
];

export const presentationRouting: ModuleWithProviders = RouterModule.forChild(presentationRoutes);
