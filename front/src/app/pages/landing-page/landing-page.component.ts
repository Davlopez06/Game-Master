import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent {

  public isLoading : boolean = false;

  constructor(private router : Router){}

  public handleClick = () => {
    this.isLoading = true;
    setTimeout(()=>{
      this.router.navigate(['/home']);
    },3000)
  }
}
