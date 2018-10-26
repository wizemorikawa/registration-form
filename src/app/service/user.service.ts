import { Injectable } from "../../../node_modules/@angular/core";
import { HttpClient } from "../../../node_modules/@angular/common/http";
import { Router } from "../../../node_modules/@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    API_URL_LOGIN = 'api/login';
    API_URL_LOGOUT = 'api/logout';
    API_URL_CHECK = 'api/login/check';
    loginUser: any = {name: '', hurigana: '', password: ''};

    constructor(
        private _http: HttpClient,
        private router: Router,
    ) {}


    login(userInfo) {
        return this._http.post(this.API_URL_LOGIN, userInfo).toPromise().then(res => {
            console.log('res', res);
            this.loginUser = res;
            return res;
        });
    }

    logout() {
        return this._http.get(this.API_URL_LOGOUT).toPromise().then(res => {
            this.loginUser = {name: '', hurigana: '', password: ''};
            window.alert(res);
            this.router.navigate(['myApp/registration']);
        });
    }

    async isAuthricated() {
        await this._http.get(this.API_URL_CHECK).toPromise().then(res => {
            console.log(res);
            this.loginUser = res;
        });
        return this.loginUser;
    }
}
