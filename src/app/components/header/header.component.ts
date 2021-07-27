import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  @Input() Title: string = ''
  @Input() Text: string = ''

  constructor() {
  }

  ngOnInit(): void {
  }

  addTitle(title: any) {
    this.Title = title
  }

  addText(text: any) {
    this.Text = text
  }
  addPost() {
    if (this.Title.trim()) {
      const post = {
        title: this.Title,
        text: this.Text
      }
      console.log('newPost: ', post)
      this.Title = ''
      this.Text = ''
    }
  }
}
