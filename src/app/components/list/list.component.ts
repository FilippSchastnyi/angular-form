import {Component, Input, OnInit} from '@angular/core';
import {FormServiceService} from "../form-service.service";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  post;

  constructor(private postService:FormServiceService) {

  }

  removePost(post){
    console.log(post)
    this.postService.deletePost(post.id)
    this.post = this.postService.getPost()
  }

  ngOnInit(): void {
    this.post = this.postService.getPost()
  }

}
