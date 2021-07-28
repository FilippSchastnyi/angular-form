import {Component, Input, OnInit} from '@angular/core';
import {Post} from "../post";

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() post: Post;

  constructor() {
  }

  ngOnInit(): void {
  }

}
