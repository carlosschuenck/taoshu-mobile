import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Aluno } from '../../shared/model/aluno';

@Injectable()
export class AlunoProvider {

  basePath: string = 'http://192.168.0.103:8080/taoshu-api/aluno';

  constructor(public http: HttpClient) {}

  findAll(){
    return this.http.get<Array<Aluno>>(`${this.basePath}`);
  }

  delete(id: number){
    return this.http.delete(`${this.basePath}/${id}`);
  }

  findById(id: number){
    return this.http.get<Aluno>(`${this.basePath}/${id}`);
  }

  save(aluno: Aluno){
    return this.http.post(`${this.basePath}`, aluno);
  }

  update(aluno: Aluno){
    return this.http.put(`${this.basePath}`, aluno);
  }
}
