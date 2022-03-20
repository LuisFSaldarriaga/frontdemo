import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule} from '@angular/forms';
import { ConsultHacedorService } from './consult-hacedor.service';

@Component({
  selector: 'consultHacedor',
  templateUrl: './consultHacedor.component.html'
})
export class consultHacedor implements OnInit{
   
  hacedorConsultForm: FormGroup = this.fb.group({
    id : [''],
    document : ['', Validators.maxLength(11)],
    email : ['', Validators.email],


})


constructor(
    public fb: FormBuilder,
    public consultHacedorService: ConsultHacedorService,
){
    
}
ngOnInit(): void {
    


}

saveSubmit(){

}




}