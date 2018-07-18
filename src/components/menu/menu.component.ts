import {Component, Input} from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {ListPage} from "../../pages/list/list";
import {Nav} from "ionic-angular";

/**
 * Generated class for the MenuComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuComponent {
  @Input() navContent: Nav;

  pages: Array<{title: string, component: any}>;

  constructor() {
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'List', component: ListPage }
    ];
  }

  openPage(page) {
    this.navContent.setRoot(page.component);
  }
}
