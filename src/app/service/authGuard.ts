import { Injectable } from '../../../node_modules/@angular/core';
import { CanActivate, Router } from '../../../node_modules/@angular/router';
import { BehaviorSubject } from '../../../node_modules/rxjs';
import { UserInfomation } from '../model/userInfomation';
import { HttpClient } from '../../../node_modules/@angular/common/http';

@Injectable({
    providedIn: 'root',
}
)
export class AuthGuard implements CanActivate {
    API_URL_LOGIN = 'api/login/check';
    userinfo = {hurigana: '', name: '', password: ''};
    private userSubject = new BehaviorSubject<UserInfomation>(new UserInfomation(this.userinfo));

    constructor(
        private _http: HttpClient,
        private route: Router
    ) {
    }

    async canActivate() {
        const login: UserInfomation = await this.checkAsync();
        console.log(login);
        if ( login.name === '') {
            this.route.navigate(['myApp/login']);
            return false;
        }
        return true;
    }




    async checkAsync() {
        const login: UserInfomation = await this._http.get(this.API_URL_LOGIN).toPromise()
        .then(res => {
            console.log(res);
           return new UserInfomation(res);
        });
        console.log('login', login);
        this.userSubject.next(login);

        return login;
    }

    getObservable() {
        return this.userSubject;
    }
}
