import { Component, Input } from '@angular/core';
import { StatesService } from 'src/app/states.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Input() public active: boolean = false
  public name : string = '';
  public handleTypes: () => void = () => {}
  public types : Array<String> = []

  constructor( private stateService : StatesService){
    this.handleTypes = this.stateService.handleTypes
  }

  async ngOnInit() {
    this.handleTypes()
    const observable = await this.stateService.getTypes()
    observable.subscribe(value => {
      this.types = value
    });
  }

  public handlleOnChange = () => {
    console.log(this.name)
  }
}
