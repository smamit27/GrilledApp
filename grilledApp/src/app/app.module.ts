import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { RecipeFilterComponent } from './recipe-filter/recipe-filter.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SpreadComponent } from './spread/spread.component';
import { RecipeFooterComponent } from './recipe-footer/recipe-footer.component';
import {RecipeService} from './recipe.service';
import { ToggleMenuDirective } from './toggle-menu.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    RecipeFilterComponent,
    RecipeDetailComponent,
    SpreadComponent,
    RecipeFooterComponent,
    ToggleMenuDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [RecipeService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
