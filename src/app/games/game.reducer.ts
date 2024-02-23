import { createReducer, on } from "@ngrx/store";
import { AddGame, RemoveGame } from "./game.actions";
import { Game } from "../models/game";

export const initalState: ReadonlyArray<Game> = []; 

export const GameReducer = createReducer(
    initalState
);