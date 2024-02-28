import { createReducer, on } from "@ngrx/store";
import { AddGame, RemoveGame, AddGameSuccess, AddGameFailure } from "./game.actions";
import { Game } from "../models/game";

export const initalState: Game[] = []; 

export const GameReducer = createReducer(
    initalState,
    //Add gook Action will only return the state
    on(AddGame, (state) => { return state}),
    //Takes the state, Take information about the game, Uses the Spread operator to copy the current state, Adds the new game
    on(AddGameSuccess, (state, {id, title, publisher}) => [...state, {id, title, publisher}]),
    //Takes in the state, and error, run some basic code in a arror function. log error then return current state
    on(AddGameFailure, (state, {error})=> {
        console.error(error);
        return state;
    }),

    on(RemoveGame, (state, {gameId}) => state.filter(game => game.id !== gameId))
);