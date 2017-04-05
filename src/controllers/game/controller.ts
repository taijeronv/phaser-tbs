import * as Phaser from 'phaser'
import {injectable, inject} from "inversify";
import Game = Phaser.Game;
import {GameConfig} from "../../config";
import Signal = Phaser.Signal;
import {BaseController} from "../base";
import {IMapBuilder} from "../../services/map_builder/interface";
import {GameEvent, GameStateManager} from "../../services/state/game/service";

@injectable()
export class GameController extends BaseController {
	constructor(
		private _game: Game,
		@inject('gameState') private _gameState: GameStateManager,
		@inject('config') private _config: GameConfig,
		@inject('IMapBuilder') private _mapBuilder: IMapBuilder
	) {
		super();
	}

	init() {
		  for(let i in [GameEvent.TurnStart, GameEvent.TurnComplete]) {
		  	this._gameState.subscribe(parseInt(i), _ => console.log(GameEvent[parseInt(i)], _));
		  }
		
		this._mapBuilder.load('demo');
	}

	update() {
	}
	
	render() {
		this._game.debug.text(this._game.time.fps || '--', 2, 14, "#a7aebe");
	}
	
	
}