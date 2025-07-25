import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'news',
    loadChildren: () => import('./news/news-routing-module').then(m => m.NewsRoutingModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks-routing-module').then(m => m.TasksRoutingModule)
  },
  {
    path: 'tools',
    loadChildren: () => import('./tools/tools-routing-module').then(m => m.ToolsRoutingModule)
  }
];

