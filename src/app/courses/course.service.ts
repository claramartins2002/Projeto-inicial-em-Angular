import {Course} from './course';
import {Injectable} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@Injectable({
providedIn: 'root'})
export class CourseService {
retrieveAll(): Course[]{
return courses;}

}

var courses : Course[] = [
{
 id: 1,
   name: 'Angular: Forms',
   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
   price: 99.90,
   duration: 120,
   rating: 5,
   releaseDate: 'December, 30, 2021'
   },
   {
      id: 2,
      name: 'Angular: Components',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
      price: 79.90,
      duration: 80,
      rating: 4.4,
      releaseDate: 'December, 30, 2021'

      },{
       id: 3,
         name: 'Spring Boot: MVC',
         imageUrl: 'https://devkico.itexto.com.br/wp-content/uploads/2014/08/spring-boot-project-logo.png',
         price: 129.90,
         duration: 120,
         rating: 2.5,
         releaseDate: 'December, 30, 2021'
         },
         {
            id: 4,
            name: 'Phyton I ',
            imageUrl: 'https://engenharia360.com/wp-content/uploads/2019/04/python-engenharia360-3-1024x512.png',
            price: 119.90,
            duration: 180,
            rating: 3.1,
            releaseDate: 'December, 30, 2021'

            }
]
