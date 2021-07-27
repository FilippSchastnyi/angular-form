import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Output() onAddPost:EventEmitter<any> = new EventEmitter
text = ""
  constructor() { }

  ngOnInit(): void {

  }

  onKeyDown(){
    this.onAddPost.emit(this.text)
  }
}
