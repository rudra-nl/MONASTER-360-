// import { CommonModule } from '@angular/common';
// import { Component, signal } from '@angular/core';
// import { Router, NavigationEnd, RouterModule, RouterLink, RouterOutlet, RouterLinkActive } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive ,RouterOutlet],
//   templateUrl: './app.html',
//   styleUrls: ['./app.css']
// })
// export class App {
//   protected readonly title = signal('MONASTERY-360');
//   currentUrl: string = '';

//   constructor(private router: Router) {
//     this.router.events.subscribe(event => {
//       if (event instanceof NavigationEnd) {
//         this.currentUrl = event.url;
//       }
//     });
//   }
// }
//
import { Component, signal } from '@angular/core';
import { Router, NavigationEnd, RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected readonly title = signal('MONASTERY-360');

  
  currentUrl = signal<string>('/');

  constructor(private router: Router) {
    this.router.events.subscribe(event => {
  if (event instanceof NavigationEnd) {
    const path = event.url.split('?')[0].split('#')[0]; 
    this.currentUrl.set(path);
  }
});
  }
}


