import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlunoProvider } from '../../../providers/aluno/aluno';
import { Aluno } from '../../../shared/model/aluno';
import { DatePipe } from '@angular/common';
import { AlunoFormPage } from '../aluno-form/aluno-form';

import { AlertController } from 'ionic-angular';

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
              public datepipe: DatePipe,
              private alertCtrl: AlertController) {
  }



  ionViewDidLoad() {
    this.findAll();
  }

  findAll(refresher?){
    this.alunoProvider.find().subscribe(
      listAlunos => { 
        this.listAlunos = listAlunos
        if(refresher){refresher.complete()}
      },
      err => console.error("erro", JSON.stringify(err))
    );
  }

  openForm(aluno?: Aluno, isReadyOnly?: boolean){
    this.navCtrl.push(AlunoFormPage, {
      alunouId: aluno ? aluno.id : undefined,
      isReadyOnly: isReadyOnly
    });
  }

  formatData(data: Date){
    return this.datepipe.transform(data, 'dd/MM/yyyy');
  }

  deletar(aluno: Aluno){
    this.alertCtrl.create({
      title: 'Atenção!',
      message: `Deseja realmente deletar o(a) ${aluno.nomeCompleto}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.alunoProvider.delete(aluno.id).subscribe(
              () => {
                this.findAll();
              },
              () =>{
                this.alertCtrl.create({
                  title: 'Erro!',
                  subTitle: `Erro ao tentar deletar!`,
                  buttons: ['OK']
                }).present();
              }
            )
          }
        },
        {text: 'Não'}
      ]
    }).present();
  }

}
