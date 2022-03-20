import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterHacedorService {

  private API_ServerGetTypes= "http://localhost:8080/tiposervicio/solicitar";
  private API_ServerPostHacedores= "http://localhost:8080/hacedor/registrar";

  constructor(
    private httpClient: HttpClient
  ){ }

  public getAllTypes(): Observable<any>{
    return this.httpClient.get(this.API_ServerGetTypes);
  }

  public saveHacedor(hacedor: any){
    return this.httpClient.post(this.API_ServerPostHacedores, hacedor)
  }
}
