import { Component } from '@angular/core';

import { HomeNavigationLink } from './models/navigation.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  navigationButtons: HomeNavigationLink[] = [
    { displayName: 'Play Game', routerUrl: '/play' },
    { displayName: 'Instructions', routerUrl: '/instructions' },
    { displayName: 'About', routerUrl: '/about' },
  ];

}
