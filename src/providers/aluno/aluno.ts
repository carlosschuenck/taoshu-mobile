import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../../shared/model/aluno';

/*
  Generated class for the AlunoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AlunoProvider {

  basePath: string = 'http://localhost:8080/taoshu-api'
  constructor(public http: HttpClient) {
    console.log('Hello AlunoProvider Provider');
  }

  find(){
    return this.http.get<Array<Aluno>>(`${this.basePath}/aluno`)
  }

}
