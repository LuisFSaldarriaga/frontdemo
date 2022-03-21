import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiceSolicitarTipoService {

  private API_Server = "http://localhost:8080/tiposervicio/solicitar";
  private API_ServerPostServicioNuevo = "http://localhost:8080/tiposervicio/nuevo"

  constructor(
    private httpClient: HttpClient
  ) { }

  public getAllTypes(): Observable<any> {
    return this.httpClient.get(this.API_Server);
  }

  public saveServicioNuevo(servicio: any) {
    return this.httpClient.post(this.API_ServerPostServicioNuevo, servicio)
  }

}