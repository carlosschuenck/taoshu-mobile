import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Aluno } from '../../../shared/model/aluno';
import { AlunoProvider } from '../../../providers/aluno/aluno-provider';
import { Turma } from '../../../shared/model/turma';
import { TurmaProvider } from '../../../providers/turma/turma-provider';

@IonicPage()
@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html',
})
export class AlunoFormPage {

  public aluno: Aluno = { turma: { id: null} };
  public turmas: Array<Turma> = [];
  public isReadyOnly: boolean;
  public headerLabel: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private alunoProvider: AlunoProvider,
              private turmaProvider: TurmaProvider,
              private toast: ToastController) {
    this.isReadyOnly = this.navParams.get('isReadyOnly');
  }

  ionViewWillEnter(){
    var alunoId = this.navParams.get('alunouId');

    if(this.isReadyOnly)
      this.headerLabel = "Visualizar Aluno";
    else if(alunoId)
      this.headerLabel = "Editar Aluno";
    else
      this.headerLabel = "Cadastrar Aluno"


    this.alunoProvider.findById(alunoId)
                      .subscribe(resp => this.aluno = resp);

    this.turmaProvider.findAll()
                      .subscribe(turmas => this.turmas = turmas);
  }

  save(){
    if(this.aluno.id){
      this.alunoProvider.update(this.aluno).subscribe(
        () => {
          this.toast.create({message: 'Aluno atualizado com sucesso!', duration: 3000}).present();
          this.navCtrl.pop();
        },
        err => this.toast.create({message: 'Problema ao tentar atualizar o aluno. Tente novamente mais tarde!', duration: 3000}).present()
      );
      return;
    }
    this.alunoProvider.save(this.aluno).subscribe(
      () => {
        this.toast.create({message: 'Aluno cadastrado com sucesso!', duration: 3000}).present();
        this.navCtrl.pop();
      },
      err => this.toast.create({message: 'Problema ao tentar cadastrar o aluno. Tente novamente mais tarde!', duration: 3000}).present()
    );
  }
}
