import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceSolicitarService {

  private API_Server= "http://localhost:8080/tiposervicio/solicitar";

  constructor(
    private httpClient: HttpClient
  ){ }

  public getAllTypes(): Observable<any>{
    return this.httpClient.get(this.API_Server);
  }

}
