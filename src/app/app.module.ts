import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StoreModule } from '@ngrx/store';
import { GameReducer } from './games/game.reducer';
import { GameListComponent } from './game-list/game-list.component';
import { AppState } from './app.state';


@NgModule({
  declarations: [
    AppComponent,
    GameListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot<AppState>({game : GameReducer})
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
``