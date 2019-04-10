import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Turma } from '../../shared/model/turma';

@Injectable()
export class TurmaProvider {

  basePath: string = 'http://192.168.0.103:8080/taoshu-api/turma';

  constructor(public http: HttpClient) {}

  public findAll(){
    return this.http.get<Array<Turma>>(this.basePath)
  }

  public findById(id: number){
    return this.http.get<Turma>(`${this.basePath}/${id}`)
  }

  public delete(id: number){
    return this.http.delete(`${this.basePath}/${id}`)
  }

  public save(turma: Turma){
    return this.http.post<Turma>(this.basePath, turma);
  }

  public update(turma: Turma){
    return this.http.put<Turma>(this.basePath, turma);
  }
}
