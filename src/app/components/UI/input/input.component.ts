import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Output() onAddPost:EventEmitter<any> = new EventEmitter
@Input() text = ""
  @ViewChild('inputElement', {static: true}) inputRef: ElementRef
  constructor() { }

  ngOnInit(): void {}

  onKeyDown(){
    this.onAddPost.emit(this.text)
  }
}
