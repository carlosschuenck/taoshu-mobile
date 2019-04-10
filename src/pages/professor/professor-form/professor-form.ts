import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Professor } from '../../../shared/model/models';
import { ProfessorProvider } from '../../../providers/professor/professor-provider';

/**
 * Generated class for the ProfessorFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professor-form',
  templateUrl: 'professor-form.html',
})
export class ProfessorFormPage {


  public professor: Professor = {};
  public isReadyOnly: boolean;
  public headerLabel: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private professorProvider: ProfessorProvider,
              private toast: ToastController) {

   this.isReadyOnly = this.navParams.get('isReadyOnly');
   var professorId = this.navParams.get('professorId');


   if(this.isReadyOnly)
      this.headerLabel = "Visualizar Professor";
   else if(professorId)
      this.headerLabel = "Editar Professor";
   else
      this.headerLabel = "Cadastrar Professor"


   this.professorProvider.findById(professorId).subscribe(
      resp => this.professor = resp,
      err => console.error(err)
    )
  }

  save(){
    if(this.professor.id){
      this.professorProvider.update(this.professor).subscribe(
        () => {
          this.toast.create({message: 'Professor atualizado com sucesso!', duration: 3000}).present();
          this.navCtrl.pop();
        },
        () => this.toast.create({message: 'Problema ao tentar atualizar o professor. Tente novamente mais tarde!', duration: 3000}).present()
      );
      return;
    }
    this.professorProvider.save(this.professor).subscribe(
      () => {
        this.toast.create({message: 'Professor cadastrado com sucesso!', duration: 3000}).present();
        this.navCtrl.pop();
      },
      () => this.toast.create({message: 'Problema ao tentar cadastrar o professor. Tente novamente mais tarde!', duration: 3000}).present()
    );
  }
}
