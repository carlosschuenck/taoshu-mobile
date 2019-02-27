import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Aluno } from '../../../shared/model/aluno';
import { AlunoProvider } from '../../../providers/aluno/aluno';

/**
 * Generated class for the AlunoFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-aluno-form',
  templateUrl: 'aluno-form.html',
})
export class AlunoFormPage {

  private aluno: Aluno = {};
  private isReadyOnly: boolean;
  private headerLabel: string
  
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private alunoProvider: AlunoProvider,
              private toast: ToastController) {

   this.isReadyOnly = this.navParams.get('isReadyOnly');
   var alunoId = this.navParams.get('alunouId');
   
   
   if(this.isReadyOnly)
      this.headerLabel = "Visualizar Aluno";
   else if(alunoId)
      this.headerLabel = "Editar Aluno";
   else
      this.headerLabel = "Cadastrar Aluno"
   
  
   this.alunoProvider.findById(alunoId).subscribe(
      resp => this.aluno = resp,
      err => console.error(err)
    )
  }

  ionViewDidLoad() {
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
