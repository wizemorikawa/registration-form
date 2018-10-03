export class UserInfomation {

  hurigana: string;
  name: string;
  password: string;


  constructor(userInfo) {
    this.hurigana = userInfo.hurigana;
    this.name = userInfo.name;
    this.password = userInfo.password;
  }
}
