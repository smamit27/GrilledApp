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
}
