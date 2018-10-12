import { Injectable } from '@angular/core';
import { getRequestParams } from '../utils/utils';
import { HttpClient } from '../../../node_modules/@angular/common/http';
import { UserInfomation } from '../model/userInfomation';


@Injectable({
    providedIn: 'root'
})
export class RegistrationServiceComponent {

    API_URL = 'api/registration';

    constructor(
        private _http: HttpClient
    ) {}

    setUserInfomation(params: UserInfomation) {
        const reqParams = params.getSearchParams();
        console.log(reqParams);
        // {name: 'morikawa', hurigana: 'morikawa'
        return this._http.post(this.API_URL, params).toPromise().then(res => {
            console.log(res);
            return res;
        });
    }

    getUserInfomation() {

        return this._http.get(this.API_URL).toPromise().then(res => {
            console.log(res);
            return res;
        });
    }

}
