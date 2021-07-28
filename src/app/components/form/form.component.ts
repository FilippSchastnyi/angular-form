import { Component, OnInit } from '@angular/core';
import {FormServiceService} from "../form-service.service";
import {Post} from "../post";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
  providers: [FormServiceService]
})
export class FormComponent implements OnInit {

  posts:Post[]
  constructor(private formService : FormServiceService) {
  this.posts = formService.getPost()
  }
  ngOnInit(): void {
  }

}
