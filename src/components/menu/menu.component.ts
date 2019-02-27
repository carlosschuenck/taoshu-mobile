import {Component, Input} from '@angular/core';
import {HomePage} from "../../pages/home/home";
import {Nav} from "ionic-angular";
import { AlunoListPage } from '../../pages/aluno/aluno-list/aluno-list';

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
      { title: 'Alunos', component: AlunoListPage }
    ];
  }

  openPage(page) {
    this.navContent.setRoot(page.component);
  }
}
