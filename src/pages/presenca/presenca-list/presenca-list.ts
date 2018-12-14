import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatePipe } from '@angular/common';

/**
 * Generated class for the PresencaListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presenca-list',
  templateUrl: 'presenca-list.html',
})
export class PresencaListPage {

  listPresenca: Array<any> = [
    { data: new Date(), presenca: true, aluno: { nomeCompleto: 'Aluno 1'} },
    { data: new Date(), presenca: false, aluno: { nomeCompleto: 'Aluno 2'} },
    { data: new Date(), presenca: true, aluno: { nomeCompleto: 'Aluno 3'} },
    { data: new Date(), presenca: false, aluno: { nomeCompleto: 'Aluno 4'} },
    { data: new Date(), presenca: true, aluno: { nomeCompleto: 'Aluno 5'} },
  ]

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public datepipe: DatePipe) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PresencaListPage');
  }


  formatData(data: Date){
    return this.datepipe.transform(data, 'hh');
  }
}
