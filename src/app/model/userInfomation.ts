import { getRequestParams } from '../utils/utils';

export class UserInfomation {

  hurigana: string;
  name: string;
  password: string;


  constructor(userInfo) {
    this.hurigana = userInfo.hurigana;
    this.name = userInfo.name;
    this.password = userInfo.password;
  }


  getSearchParams() {
    const params = [];

    if (this.hurigana) {
      params['hurigana'] = this.hurigana;
    }
    if (this.name) {
      params['name'] = this.name;
    }
    if (this.password) {
      params['password'] = this.password;
    }

    return getRequestParams(params);
  }
}
