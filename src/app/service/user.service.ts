import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API_URL_LOGIN = 'api/login';
    API_URL_LOGOUT = 'api/logout';
    loginUser: any = {name: '', hurigana: '', password: ''};

    constructor(
        private _http: HttpClient
    ) {}


    login(userInfo) {
        return this._http.post(this.API_URL_LOGIN, userInfo).toPromise().then(res => {
            console.log('res', res);
            this.loginUser = res;
            return res;
        });
    }

    logout() {
        this._http.post(this.API_URL_LOGOUT, this.loginUser).toPromise().then(res => {

        });
    }
}
