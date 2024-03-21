import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule,CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup
  formSubmitted = false;

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email:  ['', [Validators.required, Validators.email]],
      phone:  ['',Validators.required,],
      comment:['',Validators.required]
    });
  }

  onSubmit(){
    if(this.contactForm.valid){
      console.log('Formulario enviado')
    }else{
      console.log('Formulario con errores');
    }
  }
}
