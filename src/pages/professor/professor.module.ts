import { NgModule } from '@angular/core';
import { ProfessorFormPageModule } from './professor-form/professor-form.module';
import { ProfessorListPageModule } from './professor-list/professor-list.module';

@NgModule({
  imports: [
    ProfessorFormPageModule,
    ProfessorListPageModule
  ],
})
export class ProfessorPageModule {}
