import { Injectable } from "../../../../node_modules/@angular/core";
import { UserService } from "../../service/user.service";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Resolve } from "../../../../node_modules/@angular/router";

@Injectable({
    providedIn: 'root'
})
export class RegistrationResolver implements Resolve<any> {

    constructor(
        private _userService: UserService
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this._userService.isAuthricated();
    }

}



