
import { Component, OnInit } from '@angular/core';
import {Course} from './course';
@Component({
  selector: 'app-courses-list',
  templateUrl: 'course-list.component.html'
})
export class CourseListComponent implements OnInit {
   courses: Course[] = [];

   ngOnInit(): void {
   this.courses = [{

   id: 1,
   name: 'Angular: Forms',
   imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
   price: 99.90,
   duration: 120,
   rating: 5.007,
   releaseDate: 'December, 30, 2021'
   },
   {
      id: 2,
      name: 'Angular: Components',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/250px-Angular_full_color_logo.svg.png',
      price: 79.90,
      duration: 80,
      rating: 5.007,
      releaseDate: 'December, 30, 2021'

      }]

   }

}
