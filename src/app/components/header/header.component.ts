import {Component, OnInit} from '@angular/core';
import {FormServiceService} from "../form-service.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent implements OnInit {

  title: string = '';
  text: string = '';

  constructor(private formPostService: FormServiceService) {

  }

  addTitle(title:any) {
    this.title = title
  }

  addText(text: string) {
    this.text = text
  }

  addPost(){
    const post = {
      title : this.title,
      text : this.text
    }
    if (this.title.trim() && this.text.trim()){
      this.formPostService.setPost(post)
      console.log(this.formPostService.getPost())
    }
    else {
      console.log('Некоректно!')
    }
    this.title =''
    this.text =''
  }

  ngOnInit(): void {
  }
}
