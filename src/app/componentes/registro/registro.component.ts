import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})

export class RegistroComponent implements OnInit {
  registerForm: FormGroup;
    submitted = false;
    public active_spi = true;

    constructor(private formBuilder: FormBuilder, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            sexo: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }

        this.active_spi = false;
        setTimeout(() => {
          this.router.navigate(['/location']);
          this.registerForm.reset();
        }, 1000);
    }

}
