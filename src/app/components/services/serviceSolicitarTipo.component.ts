import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ServiceSolicitarTipoService } from './service-solicitar-tipo.service';

@Component({
  selector: 'serviceSolicitarTipo',
  templateUrl: './serviceSolicitarTipo.component.html'
})
export class serviceSolicitarTipo {
   
    solicitarTipoForm: FormGroup = this.fb.group({
        type : ['', Validators.required],
    })


    constructor(
        public fb: FormBuilder,
        public solicitarServiceTipo: ServiceSolicitarTipoService,
    ){
        
    }
    ngOnInit(): void {
        


    }

    saveSubmit(){

    }




}