import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AddGame, RemoveGame } from '../games/game.actions';
import { Game } from '../models/game';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';



@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  games$: Observable<Game[]>; 

  constructor(private store: Store<AppState>){

    //initalizing the games Obersvable with the games [] from the store
    this.games$ = this.store.pipe(select('game'));
  }


  //This our component method for our game action 'addGame'
  addGame(id: string, title: string, publisher: string){

    this.store.dispatch(AddGame({id, title, publisher}));

  }

  removeGame(gameId: string){

    this.store.dispatch(RemoveGame({gameId}));

  }

}
