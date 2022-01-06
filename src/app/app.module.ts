import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import {CourseListComponent } from './courses/coursesw-list.component';
import {CourseInfoComponent } from './courses/course-info.component';
import {StarComponent} from './star/star.component';
import {NavBarComponent} from './nav-bar/nav-bar.component';
import {Erro404Component} from './erro-404/erro-404.component';

import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    CourseListComponent,
     StarComponent,
     NavBarComponent,
     Erro404Component,
     CourseInfoComponent
     ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
    {
    path: '', redirectTo: 'courses', pathMatch: 'full'
    }
    ,
       {
        path:'courses/info/:id', component: CourseInfoComponent
        },
    {
  path:'courses', component: CourseListComponent
  },
  {
  path:'**', component: Erro404Component
  }
  ])
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
