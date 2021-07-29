import {Injectable} from '@angular/core';
import {Post} from "./post";

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor() {
  }

  post: Post[] = [
    {
      title: 'This is tile',
      text: 'This is text',
      id: 1
    },
    {
      title: 'This is tile of post 2',
      text: 'This is text of post 2',
      id: 2
    }
  ]

  setPost(post:any){
    this.post.unshift(post)
  }

  getPost(){
    return this.post
  }

  deletePost(id){
    this.post = this.post.filter( p => p.id !== id )
  }
}
