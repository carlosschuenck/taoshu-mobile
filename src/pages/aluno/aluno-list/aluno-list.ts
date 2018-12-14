import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoProvider } from '../../../providers/aluno/aluno';
import { Aluno } from '../../../shared/model/aluno';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the AlunoListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno-list',
  templateUrl: 'aluno-list.html',
})
export class AlunoListPage {

  listAlunos: Array<Aluno> = []

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alunoProvider: AlunoProvider,
              public datepipe: DatePipe) {
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad AlunoListPage');
    this.alunoProvider.find().subscribe(
      listAlunos => { this.listAlunos = listAlunos},
      err => console.error("err", err)
      
    );
  }

  formatData(data: Date){
    return this.datepipe.transform(data, 'dd/MM/yyyy');
  }

}
