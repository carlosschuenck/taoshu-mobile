import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TurmaFormPage } from './turma-form';

@NgModule({
  declarations: [
    TurmaFormPage,
  ],
  entryComponents: [
    TurmaFormPage
  ],  
  imports: [
    IonicPageModule.forChild(TurmaFormPage),
  ],
})
export class TurmaFormPageModule {}
