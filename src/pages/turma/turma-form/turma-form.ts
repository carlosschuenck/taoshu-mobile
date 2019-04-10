import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Turma } from '../../../shared/model/turma';
import { TurmaProvider } from '../../../providers/turma/turma-provider';
import { Professor } from '../../../shared/model/models';
import { ProfessorProvider } from '../../../providers/professor/professor-provider';

/**
 * Generated class for the TurmaFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-turma-form',
  templateUrl: 'turma-form.html',
})
export class TurmaFormPage {

  public isReadyOnly: boolean;
  public turma: Turma = { professor: { id: undefined}};
  public headerLabel: string;
  public diasDaSemana: Array<string> = [
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
    "Domingo"
  ];

  public professores: Array<Professor> = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private turmaProvider: TurmaProvider,
              private professorProvider: ProfessorProvider,
              private toast: ToastController) {
    this.isReadyOnly = this.navParams.get('isReadyOnly');
    var turmaId = this.navParams.get('turmaId');

    if(this.isReadyOnly)
      this.headerLabel = "Visualizar Turma";
    else if(turmaId)
      this.headerLabel = "Editar Turma";
    else
      this.headerLabel = "Cadastrar Turma"

    if(turmaId)
      this.findTurmaById(turmaId);
  }

  ionViewDidLoad() {
    this.findProfessores();
  }

  public findTurmaById(turmaId: number){
    this.turmaProvider.findById(turmaId).subscribe(
      resp => this.turma = resp,
      err => console.error(err)
    )
  }

  public findProfessores(){
    this.professorProvider.findAll().subscribe(
      list => this.professores = list,
      err => console.error(err)
    )
  }

  public save(){
    if(this.turma.id){
      this.turmaProvider.update(this.turma).subscribe(
        () => {
          this.toast.create({message: 'Turma atualizada com sucesso!', duration: 3000}).present();
          this.navCtrl.pop();
        },
        err => {
          this.toast.create({message: 'Problema ao tentar atualizar a turma. Tente novamente mais tarde!', duration: 3000}).present()
        }
      );
    } else{
      this.turmaProvider.save(this.turma).subscribe(
        () => {
          this.toast.create({message: 'Turma cadastrada com sucesso!', duration: 3000}).present();
          this.navCtrl.pop();
        },
        err => {
          this.toast.create({message: 'Problema ao tentar atualizar a turma. Tente novamente mais tarde!', duration: 3000}).present()
        }
      );
    };

  }

}
