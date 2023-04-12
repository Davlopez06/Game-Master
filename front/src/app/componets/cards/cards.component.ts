import { Component } from '@angular/core';
import { Game } from 'src/app/game.interface';
import { StatesService } from 'src/app/states.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {
  public handleGames: () => void = () => {}
  public handleShowGames : (number:number) => void = (num:number) => {};
  public handleNumberPages : (total : number) => void = (total:number) => {}
  public games: Array<Game> = [];
  public showGames: Array<Game> = [];
  public numberPages : number = 0

  constructor( private stateService : StatesService){
    this.handleGames = this.stateService.handlegames
    this.handleShowGames = this.stateService.handleShowGames
    this.handleNumberPages = this.stateService.handleNumberPages
  }

  async ngOnInit() {
    this.handleGames()
    this.handleShowGames(2)
    this.handleNumberPages(this.games.length)
    const observable = await this.stateService.getGames()
    observable.subscribe(value => {
      this.games = value
    });
    const observable2 = await this.stateService.getShowGames()
    observable2.subscribe(value => {
      this.showGames = value
    })
    const observable3= await this.stateService.getNumberPages()
    observable3.subscribe(value => {
      this.numberPages = value
      console.log(value)
    })
    console.log(this.games.length)
  }
}
