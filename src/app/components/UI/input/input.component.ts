import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
@Output() onAddTitle:EventEmitter<any> = new EventEmitter
@Input() Title = ""
  constructor() { }

  ngOnInit(): void {

  }

  onKeyDown(){
    this.onAddTitle.emit(this.Title)
  }
}
