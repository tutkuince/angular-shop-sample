import {Component, OnInit} from '@angular/core';
import {Category} from './category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  constructor() {
  }

  title = 'Categories';

  categories: Category[] = [
    {id: 1, name: 'Computers'},
    {id: 2, name: 'Electronics'},
    {id: 3, name: 'Movies & Television'},
    {id: 4, name: 'Pet supplies'},
    {id: 5, name: 'Video Games'}
  ];

  ngOnInit() {
  }

}
