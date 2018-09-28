import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  public recipeData;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    this.getRecipe();
  }
  getRecipe() {
    this.recipeService.getRecipe()
      .subscribe((data) => {
        this.recipeData = data;
      });
  }

}
