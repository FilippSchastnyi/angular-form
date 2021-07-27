import {Component, Input, OnInit} from '@angular/core';
import {FormServiceService} from "../form-service.service";
import {Post} from "../post";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {
  post:any = []

  constructor(private formPostService: FormServiceService) {

  }

  addTitle(title:any) {
    this.post.title = title
  }

  addText(text: string) {
    this.post.text = text
  }

  addPost(){
    if (this.post.title.trim() && this.post.text.trim()){
      this.formPostService.setPost(this.post)
      console.log(this.formPostService.getPost())
      this.post = []
    }
    else {
      console.log('Некоректно!')
    }
  }

  ngOnInit(): void {
  }
}
