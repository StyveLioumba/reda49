import { Component } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reda';

  items: MenuItem[];
  constructor() {
    this.items = [
      {
        label: 'Accueil',
        icon: 'pi pi-fw pi-home',
        routerLink:'/'
      },
      {
        label: 'Acuatilté',
        icon: 'pi pi-fw pi-globe'
      },
      {
        label: 'Guide',
        icon: 'pi pi-fw pi-map'
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-at',
        routerLink:'contact'
      }
    ];
  }
}
