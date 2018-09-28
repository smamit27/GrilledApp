import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit  {
  public recipeNav;
  constructor(private recipeService: RecipeService) {

  }
  ngOnInit() {
    this.getNavigationDetails();
  }
  getNavigationDetails() {
    this.recipeNav = this.recipeService.getNavDetails();
  }
}
