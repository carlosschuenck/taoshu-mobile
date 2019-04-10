import { NgModule } from '@angular/core';
import { TurmaFormPageModule } from './turma-form/turma-form.module';
import { TurmaListPageModule } from './turma-list/turma-list.module';

@NgModule({
  imports: [
    TurmaFormPageModule,
    TurmaListPageModule 
  ]
})
export class TurmaPageModule {}
