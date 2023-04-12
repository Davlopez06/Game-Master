import { Component, Input, OnInit } from '@angular/core';
import { Game } from 'src/app/game.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public game: Game = {
    _id: '',
    id: 0,
    name: '',
    description: '',
    fecha: '',
    rating: 0,
    plataformas: [],
    generos: [],
    img: '',
    __v: 0
  }
  @Input() public index : number = 0
  public name: String = '';
  public rating: number = 0;
  public image : string = '';
  public genres : Array<String> = []
  public id : number = 0

  constructor(){}

  ngOnInit(): void {
    this.name = this.game.name;
    this.genres = this.game.generos;
    this.rating = this.game.rating;
    this.image = this.game.img;
    this.id = this.game.id;
  }

}

