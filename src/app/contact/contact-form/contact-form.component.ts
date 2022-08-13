import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;
  submitForm !: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.submitForm = new FormGroup({
      "name": new FormControl(null, Validators.required),
      "mail": new FormControl(null, Validators.required),
      "phone-number": new FormControl(null, Validators.required),
      "message": new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    if (this.submitForm.valid) {
      //add product
      setTimeout(() =>
      this.formGroupDirective.resetForm(), 0)
    }
  }

}
