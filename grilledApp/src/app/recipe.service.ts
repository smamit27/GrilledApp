import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  getRecipe() {
    return this.http.get('http://localhost:3000/recipe');
  }

  getNavDetails() {
   const navDetails = {
    GRILL : 'The Grilled Prawn',
    RECIPES: 'RECIPES',
    DRINKS : 'DRINKS',
    DECORATIONS : 'DECORATIONS',
    ABOUT : 'ABOUT THE GRILLED PRAWN'
   };
    return navDetails;
  }
}
