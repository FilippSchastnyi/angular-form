import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'ngButton',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() disabled: boolean = false;
  @Input() text: string = ""
  @Input() size: 'xsm' | 'sm' | 'm' | 'lg' = 'm';
  @Input() type: 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'white' | 'link ' | 'link-bordered' | 'icon-gray' = 'default';
  @Input() customClasses: string | Array<string> = '';
  @Output() btnClick: EventEmitter<any> = new EventEmitter<any>()
  classesArray: Array<string> = [];
  private _btnPrefix = 'btn--';
  constructor() {
  }

  ngOnInit(): void {
    this.setClasses();
  }

  onClick(){
    this.btnClick.emit()
  }

  setClasses() {
    if (this.size !== 'm') {
      this.classesArray.push(this._btnPrefix + this.size);
    }

    this.classesArray.push(this._btnPrefix + this.type);

    if (this.customClasses) {
      this.classesArray.push(this._btnPrefix + this.customClasses);
    }
  }
}
