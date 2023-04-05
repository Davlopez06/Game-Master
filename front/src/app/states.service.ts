import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  private active = new BehaviorSubject<boolean>(false) 

  constructor(
  ){}

  public handleActive = () => {
    const currentValue = this.active.getValue();
    this.active.next(!currentValue);
  }

  public getActive = () => {
    return this.active.asObservable()
  }
}
