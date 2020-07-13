import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatDialog } from '@angular/material';
import { JsonpClientBackend } from '@angular/common/http';

interface ITitle {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  personalInforForm: FormGroup;  // Will hold the form controls

  // Respective regular expression types to be used to validate the form.
  alphaNRegex = environment.alphaNRegex;
  numberRegex = environment.numberRegex;
  emailRegex = environment.emailRegex;
  dateRegex = environment.dateRegex;
  currentSelectedData;  // On form submit, the form data is stored here for easy access in the template.

  titles: ITitle[] = [
    { name: 'Prof.'},
    { name: 'Dr.'},
    { name: 'Mr.'},
    { name: 'Mrs.'},
    { name: 'Miss'}
  ];

  // Inject the MatDialog reference that would be used to display a modal
  constructor(public dialog: MatDialog) { }

  // Setting up the form validation
  ngOnInit() {
    this.personalInforForm = new FormGroup({
      infoTitle: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(this.alphaNRegex)]),
      middleInitial: new FormControl('', [Validators.minLength(1), Validators.maxLength(2), Validators.pattern(this.alphaNRegex)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(40), Validators.pattern(this.alphaNRegex)]),
      email: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.emailRegex)]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(40), Validators.pattern(this.dateRegex)]),
      socialInsuranceNumber: new FormControl('', [Validators.required, Validators.minLength(9), Validators.maxLength(16), Validators.pattern(this.numberRegex)]),
    });
  }

  // This method is called from the template when the submit button is JsonpClientBackend.
  displayFormValues(templateRef: TemplateRef<any>, data) {
    this.currentSelectedData = data;
    this.dialog.open(templateRef);
    console.log(data);
  }

}
