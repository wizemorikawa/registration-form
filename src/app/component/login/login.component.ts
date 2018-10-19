import { Component } from "../../../../node_modules/@angular/core";
import { UserService } from "../../service/user.service";
import { Router } from "../../../../node_modules/@angular/router";
import { AuthGuard } from "../../service/authGuard";
import { UserInfomation } from "../../model/userInfomation";

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html'
})
export class LoginComponent {

    name: string;
    password: string;

    constructor(
        private _userService: UserService,
        private route: Router,
        private _auth: AuthGuard
    ) { }

    login() {
        const params = {
            name: this.name,
            password: this.password
        };
        this._userService.login(params).then(res => {
            if (res) {
                this._auth.getObservable().next(<UserInfomation>res);
                this.route.navigate(['myApp/registration']);
            } else {
                window.alert('名前かパスワードが違います');
            }
        });
    }
}
