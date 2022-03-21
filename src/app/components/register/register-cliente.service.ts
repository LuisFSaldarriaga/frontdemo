import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterClienteService {

  private API_ServerPostHacedores= "http://localhost:8080/clientes/registrar";

  constructor(
    private httpClient: HttpClient
  ){ }

  public saveCliente(cliente: any){
    return this.httpClient.post(this.API_ServerPostHacedores, cliente)
  }
}