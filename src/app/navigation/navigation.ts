import { Component } from '@angular/core';
import {NgbNavModule} from '@ng-bootstrap/ng-bootstrap';
import {NavigationEnd, Router, RouterLink, RouterModule} from '@angular/router';
import {filter} from 'rxjs';

// using ng-bootstrap nav component
// this component renders the nav links to each route & the title for the current route
@Component({
  selector: 'app-navigation',
  imports: [NgbNavModule, RouterLink, RouterModule],
  templateUrl: './navigation.html',
  styleUrl: './navigation.scss'
})
export class Navigation {
  active: number = 0;

  constructor(private router: Router) {}

  ngOnInit() {
    // Set initial active ID based on current URL
    this.setActiveIdFromUrl(this.router.url);

    // Subscribe to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: NavigationEnd) => {
      this.setActiveIdFromUrl(event.url);
    });
  }


  private setActiveIdFromUrl(url: string) {
    switch(url) {
      case '':
      case '/':
      case '/home':
        this.active = 1;
        break;
      case '/news':
        this.active = 2;
        break;
      case '/tasks':
        this.active = 3;
        break;
      case '/tools':
        this.active = 4;
        break;
    }
  }

}
