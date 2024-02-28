import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as gameActions from './game.actions';
import { GameService } from "./game.service";

//
@Injectable()
export class GameEffects {
    //We need to make sure we only run this effect when specific action appears aka addagem
    addGame$ = createEffect(() => {});

    //
    constructor(
        //This is how we gain access to the actions that got dispatched within our application
        private actions$: Actions,
        private gameService: GameService
         ){}


} 