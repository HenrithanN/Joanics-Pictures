import { PhotoDetailsComponent } from './photos/photo-details/photo-details.component';
import { RequireAutenticationGuard } from './core/auth/require-autentication.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './errors/not-found/not-found.component';
import { PhotoFormComponent } from './photos/photo-form/photo-form.component';
import { PhotoListComponent } from './photos/photo-list/photo-list.component';
import { PhotoListResolver } from './photos/photo-list/photo-list.resolver';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo:'home'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomeModule',
  },
  {
    path: 'user/:userName',
    pathMatch:'full',
    component: PhotoListComponent,
    resolve: {
      photos: PhotoListResolver
    },
    data:{
      title:'Joanics - Linha do Tempo'
    }
  },
  {
    path: 'p/add',
    component: PhotoFormComponent,
    canActivate:[RequireAutenticationGuard],
    data:{
      title:'Joanics - Adicionar Fotos'
    }
  },
  {
    path: 'p/:photoId',
    component: PhotoDetailsComponent,
    data:{
      title:'Joanics - Detalhes da Foto'
    }
  },
  {
    path: 'not-found',
    component: NotFoundComponent,
    data:{
      title:'404 - Não encontrada'
    }
  },
  {
    path: '**',
    redirectTo:'not-found'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
