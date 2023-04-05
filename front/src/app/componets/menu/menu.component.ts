import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() public active: boolean = false
  public name : string = '';

  constructor(){}

  public handlleOnChange = () => {
    console.log(this.name)
  }
}
