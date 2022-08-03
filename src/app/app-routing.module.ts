
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddBookFormComponent } from './add-book-form/add-book-form.component';

const routes: Routes = [
  {
    path:'',component:LoginComponent
  },

  {
    path:'auth',component:LoginComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'addBook', component:AddBookFormComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
