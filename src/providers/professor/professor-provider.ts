import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Professor, Turma } from '../../shared/model/models';

@Injectable()
export class ProfessorProvider {

  basePath: string = 'http://192.168.0.103:8080/taoshu-api/professor';

  constructor(public http: HttpClient) {}

  public findAll(){
    return this.http.get<Array<Professor>>(this.basePath);
  }

  public findById(id: number){
    return this.http.get<Professor>(`${this.basePath}/${id}`);
  }

  public save(professor: Professor){
    return this.http.post(`${this.basePath}`,professor);
  }

  public update(professor: Professor){
    return this.http.put(`${this.basePath}`,professor);
  }

  public delete(id: number){
    return this.http.delete(`${this.basePath}/${id}`);
  }
}
