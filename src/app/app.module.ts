import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { GameReducer } from './games/game.reducer';
import { GameListComponent } from './game-list/game-list.component';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({game : GameReducer})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
``