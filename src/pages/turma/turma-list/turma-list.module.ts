import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmaListPage } from './turma-list';

@NgModule({
  declarations: [
    TurmaListPage,
  ],
  entryComponents: [
    TurmaListPage
  ],
  imports: [
    IonicPageModule.forChild(TurmaListPage),
  ],
})
export class TurmaListPageModule {}
