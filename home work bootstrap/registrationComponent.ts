import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
    selector: 'registration-page',
    templateUrl: './registration.component.html',
    styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    registration_Form: FormGroup;
    Name = new FormControl("", Validators.required);
    Email = new FormControl("", Validators.required, Validators.pattern('/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/'));
    Phome = new FormControl("", Validators.required);
    Address = new FormControl("", Validators.required);
    PinCode = new FormControl("", Validators.required, Validators.minLength(6));

    constructor(fb: FormBuilder) {
        this.registration_Form = fb.group({
            "Name": this.Name,
            "Email": this.Email,
            "Phome": this.Phome,
            "Address": this.Address,
            "PinCode": this.PinCode
        });
    }

    doRegistration(values: any): void {
        if (this.registration_Form.valid) {
            console.log(values);
        }
    }
}