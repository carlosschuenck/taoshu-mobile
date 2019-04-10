import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfessorListPage } from './professor-list';

@NgModule({
  declarations: [
    ProfessorListPage,
  ],
  entryComponents: [
    ProfessorListPage
  ],
  imports: [
    IonicPageModule.forChild(ProfessorListPage),
  ],
})
export class ProfessorListPageModule {}
