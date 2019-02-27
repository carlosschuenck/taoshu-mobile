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

  basePath: string = 'http://192.168.0.103:8080/taoshu-api';

  constructor(public http: HttpClient) {}

  find(){
    return this.http.get<Array<Aluno>>(`${this.basePath}/aluno`);
  }

  delete(id: number){
    return this.http.delete(`${this.basePath}/aluno/${id}`);
  }

  findById(id: number){
    return this.http.get<Aluno>(`${this.basePath}/aluno/${id}`);
  }

  save(aluno: Aluno){
    return this.http.post(`${this.basePath}/aluno`, aluno);
  }

  update(aluno: Aluno){
    return this.http.put(`${this.basePath}/aluno`, aluno);
  }
}
