import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Game } from './game.interface';

@Injectable({
  providedIn: 'root'
})


export class StatesService {
  private active = new BehaviorSubject<boolean>(false)
  private types = new BehaviorSubject<Array<String>>([])
  private games = new BehaviorSubject<Array<Game>>([])
  private showGames = new BehaviorSubject<Array<Game>>([])
  private numberPages = new BehaviorSubject<number>(0)

  constructor(
  ){}

  public handleActive = () => {
    const currentValue = this.active.getValue();
    this.active.next(!currentValue);
  }

  public getActive = () => {
    return this.active.asObservable()
  }

  public handleTypes = async () => {
    try {
      const response = await fetch('http://localhost:10000/types');
      const data = await response.json();
      const type = data.map((type : {_id : string, id : number,name: string}) => {
        return type.name
      })
      this.types.next(type);
    } catch (error) {
      console.error(error);
    }
  }
  public getTypes = async () => {
    return this.types.asObservable()
  }

  public handlegames = async () => {
    try {
      const response = await fetch('http://localhost:10000/games');
      const data = await response.json();
      this.games.next(data);
      this.handleNumberPages()
    } catch (error) {
      console.error(error);
    }
  }
  public handleShowGames = (num : number) => {
    let game : Array<Game> = []
    this.games.subscribe((games: Game[]) => {
      for (let i = 12*(num-1); i < 12*num; i++) {
        if (games[i]) {
          game.push(games[i])
        }
      }
    });
    this.showGames.next(game)
  }

  public handleNumberPages = () => {
    let total = 0
    this.games.subscribe((games: Game[]) => {
      total = games.length
    });
    if (total % 12 === 0) this.numberPages.next(total/12)
    else this.numberPages.next(Math.floor(total/12))
  }

  public getShowGames = () => {
    return this.showGames.asObservable()
  }

  public getNumberPages = () => {
    return this.numberPages.asObservable()
  }

  public getGames = async () => {
    return this.games.asObservable()
  }
  }
