import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { RegisterClienteService } from './register-cliente.service';

@Component({
  selector: 'registerCliente',
  templateUrl: './registerCliente.component.html'
})
export class registerCliente implements OnInit {
  
    clienteForm: FormGroup = this.fb.group({
        name : ['', Validators.required],
        document : ['', Validators.required, Validators.minLength(5), Validators.maxLength(11)],
        direccion : ['', Validators.required],
        email : ['', Validators.required, Validators.email],
        password : ['', Validators.required, Validators.minLength(5), Validators.maxLength(10)],
    })


    constructor(
        public fb: FormBuilder,
        public clienteService: RegisterClienteService,
    ){
        
    }
    ngOnInit(): void {
        


    }

    saveSubmit(){

    }




}