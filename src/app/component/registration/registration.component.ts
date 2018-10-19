import { Component, ChangeDetectorRef, OnInit, ChangeDetectionStrategy } from "../../../../node_modules/@angular/core";
import { Location, NgSwitchCase } from "../../../../node_modules/@angular/common";
import { Router, ActivatedRoute, NavigationEnd, ActivatedRouteSnapshot } from "../../../../node_modules/@angular/router";
import { routerNgProbeToken } from "../../../../node_modules/@angular/router/src/router_module";
import { AuthGuard } from "../../service/authGuard";
import { UserService } from "../../service/user.service";

@Component({
    selector: 'app-registration',
    templateUrl: 'registration.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {

    title = '会員登録';
    currentPath = 'registration';
    // ログイン情報
    loginInfo;

    constructor(
        public _location: Location,
        private _router: Router,
        private _auth: AuthGuard,
        private _userService: UserService
    ) {
        // _router.routeReuseStrategy.shouldReuseRoute = () => {
        //     return false;
        // };
        // _auth.getObservable().subscribe(loginInfo => {
        //     this.loginInfo = loginInfo;
        // });
        this.loginInfo = this._userService.loginUser;
    }

    ngOnInit(): void {
        // this._router.events.subscribe(event => {
        //     if (!(event instanceof NavigationEnd)) {
        //         return;
        //     }
        // });
    }

    currentUrl(path: string) {
        const currentPath = path.split('/').pop();
        console.log('test1', currentPath);
        if (currentPath.indexOf('?') !== -1) {
            return currentPath.substring(0, currentPath.indexOf('?'));
        }
        console.log('test', currentPath === 'registration');
        return currentPath;
        // this._cdRef.markForCheck();
    }

    moveMemberPanel() {
        this._router.navigate(['myApp/member']);
    }
}
