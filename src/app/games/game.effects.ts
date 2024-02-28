import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as gameActions from './game.actions';
import { GameService } from "./game.service";
import { mergeMap, map, catchError, of } from "rxjs";

//
@Injectable()
export class GameEffects {
    //1 . We only run effect when specific action appears aka addGame action 
    addGame$ = createEffect(() => this.actions$.pipe(
        ofType(gameActions.AddGame),
        //2. mergeMap lets us take multiple observables & transform into single observable, then we can handle all of them
        //3. The service will perform its function, then return a observable which we pipe
        mergeMap((action) => this.gameService.addGame(action)
        .pipe(
            //Takes game model from the service call then mapping it into the AddGameSuccess Action
            //Which means we are basically starting that action 
            map(game => gameActions.AddGameSuccess(game)),
            //If any error occurs we catch the error and map it into the addGameFail and starting that action 
            catchError((error) => of(gameActions.AddGameFailure({error})))
        ))

    )

    );

    //
    constructor(
        //This is how we gain access to the actions that got dispatched within our application
        private actions$: Actions,
        private gameService: GameService
         ){}


} 