import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HomeComponent } from './pages/home/home.component';
import { AlbumsComponent } from './pages/albums/albums.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
{ path: "", component: HomeComponent},
{ path: "home", component: HomeComponent,},
{ path: "albums", component: AlbumsComponent},
{ path: "profile", component: ProfileComponent}
]; // sets up routes constant where you define your routes

@NgModule({
  exports: [RouterModule],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
