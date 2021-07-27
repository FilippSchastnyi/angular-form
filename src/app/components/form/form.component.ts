import { Component, OnInit } from '@angular/core';
import {FormServiceService} from "../form-service.service";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormServiceService]
})
export class FormComponent implements OnInit {


  constructor() { }
  ngOnInit(): void {
  }

}
