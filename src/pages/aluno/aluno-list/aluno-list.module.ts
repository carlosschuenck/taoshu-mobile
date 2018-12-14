import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoListPage } from './aluno-list';
import { AlunoProvider } from '../../../providers/aluno/aluno';

@NgModule({
  declarations: [
    AlunoListPage,
  ],
  imports: [
    IonicPageModule.forChild(AlunoListPage),
  ],
  providers: [
    AlunoProvider
  ]
})
export class AlunoListPageModule {}
