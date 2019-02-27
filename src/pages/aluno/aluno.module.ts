import { NgModule } from '@angular/core';
import { AlunoProvider } from '../../providers/aluno/aluno';
import { AlunoFormPageModule } from './aluno-form/aluno-form.module';
import { AlunoListPageModule } from './aluno-list/aluno-list.module';
import { ComponentsModule } from '../../components/components.module';

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
