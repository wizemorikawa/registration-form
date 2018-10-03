import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserInfomation } from '../../model/userInfomation';

@Component({
  selector: 'app-confirm-infomation',
  templateUrl: './confirm-infomation.component.html',
  styleUrls: ['./confirm-infomation.component.css']
})
export class ConfirmInfomationComponent implements OnInit {

  @Input() userInfo: UserInfomation;
  @Output() onclickCompleteButton: EventEmitter<void> = new EventEmitter();
  @Output() onclickBack: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


  complete() {
    this.onclickCompleteButton.emit();
  }

  backInputInfomation() {
    this.onclickBack.emit();
  }

}
