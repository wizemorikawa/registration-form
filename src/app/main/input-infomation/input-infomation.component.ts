import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { UserInfomation } from '../../model/userInfomation';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-input-infomation',
  templateUrl: './input-infomation.component.html',
  styleUrls: ['./input-infomation.component.css']
})
export class InputInfomationComponent implements OnInit {

  @Output() confirmUserInfo: EventEmitter<UserInfomation> = new EventEmitter();

  hurigana: string;
  name: string;
  password: string;
  errorFlg = false;
  error = {
    huriganaError: false,
    nameError: false,
    passwordError: false,
  };
  date = new Date();
  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log('サーバーに送る');
    this.http.get('api/character').toPromise().then((res) => {
      console.log(res);
    });
  }


  changeHurigana(hurigana: string) {
    console.log(typeof hurigana);
    const validation = hurigana.match(/^[\u3040-\u309f　]+$/) ? true : false;
    if (validation) {
      this.hurigana = hurigana;
    } else {
      this.error.huriganaError = true;
      this.hurigana = undefined;
    }

  }

  changeName(name: string) {
    const validation = name.match(/^[\u30e0-\u9fcf\u3040-\u309f　]+$/) ? true : false;

    if (validation) {
      this.name = name;
    } else {
      this.error.nameError = true;
      this.name = undefined;
    }
  }

  changePassword(password) {
    const validation = password.match(/^[a-zA-Z\d]+$/) ? true : false;

    if (validation) {
      this.password = password;
    } else {
      this.error.passwordError = true;
      this.password = undefined;
    }
  }

  confirm() {

    if (this.hurigana === undefined ||
        this.name === undefined ||
        this.password === undefined) {
        this.errorFlg = true;
        return;
      }

    const tmp = {
      hurigana: this.hurigana,
      name: this.name,
      password: this.password
    };
    console.log(tmp);
    const userInfo = new UserInfomation(tmp);

    this.confirmUserInfo.emit(userInfo);
  }

}
