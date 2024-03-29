import { createAction, props } from "@ngrx/store";
import { Game } from "../models/game";

//point to actaul things you should create. like the components that make up the actions

//1. export consts
//specific the type 
//Add props,  in this case its a Game
export const AddGame = createAction('[Game] Add Game', props<Game>()); 

export const AddGameSuccess = createAction('[Game] Add Game Successful', props<Game>());
export const AddGameFailure = createAction('[Game] Add Game Failure', props<{error: any}>());

export const RemoveGame = createAction('[Game] Add Game', props<{gameId: string}>());
