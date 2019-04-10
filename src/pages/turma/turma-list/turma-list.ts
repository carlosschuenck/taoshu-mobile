import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { TurmaProvider } from '../../../providers/turma/turma-provider';
import { Turma } from '../../../shared/model/turma';
import { TurmaFormPage } from '../turma-form/turma-form';

/**
 * Generated class for the TurmaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turma-list',
  templateUrl: 'turma-list.html',
})
export class TurmaListPage {

  public turmas: Array<Turma> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private turmaProvider: TurmaProvider,
              private alertCtrl: AlertController,
              private toast: ToastController) {
  }

  ionViewWillEnter() {
    this.findAll();
  }

  public findAll(refresher?){
    this.turmaProvider.findAll().subscribe(
      list => {
        this.turmas = list
        if(refresher)
          refresher.complete();
      },
      err => console.error(err)
    )
  }

  public openForm(turma?: Turma, isReadyOnly?: boolean){
    this.navCtrl.push(TurmaFormPage, {
      turmaId: turma ? turma.id : undefined,
      isReadyOnly: isReadyOnly
    });
  }

  public deletar(turma: Turma){
    this.alertCtrl.create({
      title: 'Atenção!',
      message: `Deseja realmente deletar esta turma?`,
      buttons: [
        {
          text: 'Sim',
          handler: () => {
            this.turmaProvider.delete(turma.id).subscribe(
              () => {
                this.toast.create({message: 'Turma deletada com sucesso!', duration: 3000}).present();
                this.findAll();
              },
              err =>{
                console.error(err);
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
