import { Game } from "./models/game";

export interface AppState {

    //Because the app state is immutable we need to specify readonly or our game entity
    // ** Even though this is an array the convention is to still name it singularly 
    readonly game: Game[]
}
