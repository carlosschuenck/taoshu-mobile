import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresencaListPage } from './presenca-list';

@NgModule({
  declarations: [
    PresencaListPage,
  ],
  imports: [
    IonicPageModule.forChild(PresencaListPage),
  ],
  exports: [
    PresencaListPage
  ]
})
export class PresencaListPageModule {}
