import * as Phaser from 'phaser'
import Game = Phaser.Game;
import {GameConfig} from "../../config";
import Signal = Phaser.Signal;

export class GameController {
	game: Game;
	state: {[key:string]: any}; //global state obj accessible to other controllers
	signals: {[key: number]: Signal};
	config: GameConfig;

	constructor(game:Game, config: GameConfig) {
		this.config = config;
		this.game = game;
	}


	/// adds callback to signal, creating the signal if it doesn't exist.
	subscribe(event: GameEvent, callback: Function) {
		if (!this.signals[event])
			this.signals[event] = new Signal();

		this.signals[event].add(callback);
	}
}

export enum GameEvent {
	GridCellActivated,
	UnitSelected,
	UnitMoved
}