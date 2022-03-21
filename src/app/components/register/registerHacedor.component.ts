import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { RegisterHacedorService } from './register-hacedor.service';

@Component({
  selector: 'registerHacedor',
  templateUrl: './registerHacedor.component.html'
})
export class registerHacedor implements OnInit {

  types: any;

  hacedorForm: FormGroup = this.fb.group({
    name: ['', [Validators.required, Validators.min(1)]],
    document: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(11)]],
    direccion: ['', [Validators.required, Validators.min(1)]],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
    job: ['', [Validators.required]],
    workrange: ['', [Validators.required]],

  })


  constructor(
    public fb: FormBuilder,
    public hacedorService: RegisterHacedorService,
  ) {

  }
  ngOnInit(): void {

    this.hacedorService.getAllTypes().subscribe({
      next: resp => { this.types = resp; },
      error: err => { console.error(err) }
    })

  }

  saveSubmit() {

    this.hacedorService.saveHacedor(this.hacedorForm.value).subscribe({
      next: resp => { console.log("registrado") },
      error: err => { console.error(err) }
    })

  }




}