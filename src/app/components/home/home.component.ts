import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  addVideoForm: FormGroup;
  alphaNRegex = environment.alphaNRegex;
  editAlphaNRegex = environment.editAlphaNRegex;

  constructor() { }

  ngOnInit() {
    this.addVideoForm = new FormGroup({
      videoTitle: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(28), Validators.pattern(this.alphaNRegex)]),
      videoCategory: new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(40), Validators.pattern(this.alphaNRegex)]),
      videoDescription: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(60), Validators.pattern(this.alphaNRegex)]),
    });
  }

}
