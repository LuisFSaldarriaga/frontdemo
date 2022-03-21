import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ServiceSolicitarService } from './service-solicitar.service';

@Component({
  selector: 'serviceSolicitar',
  templateUrl: './serviceSolicitar.component.html'
})
export class serviceSolicitar {

    status: any;
    types: any;
   
    solicitarForm: FormGroup = this.fb.group({
        type : ['', Validators.required],
        descryption : ['', Validators.required],
        value : ['', Validators.required],
        status : ['', Validators.required]

    })


    constructor(
        public fb: FormBuilder,
        public solicitarService: ServiceSolicitarService,
    ){
        
    }
    ngOnInit(): void {
        this.status="paring";
        this.solicitarService.getAllTypes().subscribe({ 
            next: resp => {this.types = resp;},
            error: err => { console.error(err)}
          })

    }

    saveSubmit() {

        this.solicitarService.saveServicio(this.solicitarForm.value).subscribe({
            next: resp => { console.log("registrado") },
            error: err => { console.error(err) }
        })

    }




}