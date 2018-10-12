import { Component, OnInit } from '@angular/core';
import { UserInfomation } from '../../model/userInfomation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  selectedPage: number;
  userInfo: UserInfomation;

  DISPLAY_PAGE = {
    INPUT_INFOMATION: 1,
    COMFIRM: 2,
    COMPLETE_MEMBER_JOIN: 3
  };

  constructor() { }

  ngOnInit() {
    this.selectedPage = this.DISPLAY_PAGE.INPUT_INFOMATION;
  }

  openConfirmPage(userInfo) {
    console.log(userInfo);
    this.userInfo = userInfo;
    this.selectedPage = this.DISPLAY_PAGE.COMFIRM;
  }

  openInputInfomationPage() {
    this.selectedPage = this.DISPLAY_PAGE.INPUT_INFOMATION;
  }

  openCompletePage() {
    this.selectedPage = this.DISPLAY_PAGE.COMPLETE_MEMBER_JOIN;
  }
}
