import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlunoListPage } from './aluno-list';

@NgModule({
  declarations: [
    AlunoListPage,
  ],
  entryComponents:[
    AlunoListPage
  ],
  imports: [
    IonicPageModule.forChild(AlunoListPage)
  ]
})
export class AlunoListPageModule {}
