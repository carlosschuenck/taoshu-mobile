import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresencaFormPage } from './presenca-form';

@NgModule({
  declarations: [
    PresencaFormPage,
  ],
  imports: [
    IonicPageModule.forChild(PresencaFormPage),
  ],
})
export class PresencaFormPageModule {}
