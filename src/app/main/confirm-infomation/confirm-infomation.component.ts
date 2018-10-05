import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserInfomation } from '../../model/userInfomation';
import { HttpClient, HttpParams } from '../../../../node_modules/@angular/common/http';
import { RegistrationServiceComponent } from '../../service/registration.service';

@Component({
  selector: 'app-confirm-infomation',
  templateUrl: './confirm-infomation.component.html',
  styleUrls: ['./confirm-infomation.component.css']
})
export class ConfirmInfomationComponent implements OnInit {

  @Input() userInfo: UserInfomation;
  @Output() onclickCompleteButton: EventEmitter<void> = new EventEmitter();
  @Output() onclickBack: EventEmitter<void> = new EventEmitter();

  constructor(
    private _registrationService: RegistrationServiceComponent
  ) { }

  ngOnInit() {
  }


  complete() {
    const  req = new UserInfomation(this.userInfo);
    this._registrationService.setUserInfomation(req).then(res => {
      console.log(res);
      this.onclickCompleteButton.emit();
    });
  }

  backInputInfomation() {
    this.onclickBack.emit();
  }

}
