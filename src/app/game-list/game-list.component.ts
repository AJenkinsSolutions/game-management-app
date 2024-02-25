import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddGame, RemoveGame } from '../games/game.actions';
import { Game } from '../models/game';


@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent {

  constructor(private store: Store){}


  //This our component method for our game action 'addGame'
  addGame(id: string, title: string, publisher: string){

    this.store.dispatch(AddGame({id, title, publisher}));

  }

  removeGame(gameId: string){

    this.store.dispatch(RemoveGame({gameId}));

  }

}
