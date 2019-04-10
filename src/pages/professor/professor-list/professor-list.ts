import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { Professor } from '../../../shared/model/models';
import { ProfessorFormPage } from '../professor-form/professor-form';
import { ProfessorProvider } from '../../../providers/professor/professor-provider';


@IonicPage()
@Component({
  selector: 'page-professor-list',
  templateUrl: 'professor-list.html',
})
export class ProfessorListPage {

  public professores: Array<Professor> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alertCtrl: AlertController,
              private professorProvider: ProfessorProvider,
              private toast: ToastController) {
  }

  ionViewWillEnter(){
    this.findAll();
  }

  openForm(professor?: Professor, isReadyOnly?: boolean){
    this.navCtrl.push(ProfessorFormPage, {
      professorId: professor ? professor.id : undefined,
      isReadyOnly: isReadyOnly
    });
  }


  public findAll(refresher?){
    this.professorProvider.findAll().subscribe(
      resp => {
        this.professores = resp
        if(refresher)
          refresher.complete();
      },
      err => console.error(err)
    )
  }

  deletar(professor: Professor){
    this.alertCtrl.create({
      title: 'Atenção!',
      message: `Deseja realmente deletar o(a) ${professor.nomeCompleto}?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.professorProvider.delete(professor.id).subscribe(
              () => {
                this.toast.create({message: 'Aluno deletado com sucesso!', duration: 3000}).present();
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
