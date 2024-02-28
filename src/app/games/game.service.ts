import { Injectable } from '@angular/core';
import { Game } from '../models/game';
import { Observable, of, throwError } from 'rxjs';
import { BlockGroup } from '@angular/compiler';



@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  //This would usually connect to API Backend
  addGame(game: Game): Observable<Game>{
    return of(game);
  }

}
