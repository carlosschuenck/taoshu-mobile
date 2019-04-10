import { NgModule } from '@angular/core';
import { AlunoProvider } from '../../providers/aluno/aluno-provider';
import { AlunoFormPageModule } from './aluno-form/aluno-form.module';
import { AlunoListPageModule } from './aluno-list/aluno-list.module';

@NgModule({
  imports: [
    AlunoFormPageModule,
    AlunoListPageModule
  ],
  providers: [
    AlunoProvider
  ]
})
export class AlunoModule {}
