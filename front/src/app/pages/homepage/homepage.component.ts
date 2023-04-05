import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/componets/navbar/navbar.component';
import { StatesService } from 'src/app/states.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public handleActive: () => void = () => {}
  public active : boolean = false

  constructor( private stateService : StatesService){
    this.handleActive = this.stateService.handleActive
  }

  ngOnInit(): void {
    const observable = this.stateService.getActive()

    observable.subscribe(value => {
      this.active = value;
    });
  }
}
