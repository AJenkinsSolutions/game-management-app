import { createReducer, on } from "@ngrx/store";
import { AddGame, RemoveGame } from "./game.actions";
import { Game } from "../models/game";

export const initalState: ReadonlyArray<Game> = []; 

export const GameReducer = createReducer(
    initalState,
    on(AddGame, (state, {id, title, publisher}) => [...state, {id, title, publisher}]),
    on(RemoveGame, (state, {gameId}) => state.filter(game => game.id !== gameId))
);