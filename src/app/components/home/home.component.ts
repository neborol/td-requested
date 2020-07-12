import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';

interface ITitle {
  name: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addVideoForm: FormGroup;
  alphaNRegex = environment.alphaNRegex;
  editAlphaNRegex = environment.editAlphaNRegex;

  titles: ITitle[] = [
    { name: 'Prof.'},
    { name: 'Dr.'},
    { name: 'Mr.'},
    { name: 'Mrs.'},
    { name: 'Miss'}
  ];

  constructor() { }

  ngOnInit() {
    this.addVideoForm = new FormGroup({
      infoTitle: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      middleInitial: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      email: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      dateOfBirth: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      socialInsuranceNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
    });
  }

}
