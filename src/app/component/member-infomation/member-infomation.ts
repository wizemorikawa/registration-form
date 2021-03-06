import { Component, OnInit, ChangeDetectorRef } from '../../../../node_modules/@angular/core';
import { RegistrationServiceComponent } from '../../service/registration.service';
import { UserInfomation } from '../../model/userInfomation';
import { forEach } from '../../../../node_modules/@angular/router/src/utils/collection';

@Component({
    selector: 'app-member-infomation',
    templateUrl: 'member-infomation.html',
    styleUrls: ['member-infomation.scss'],
})
export class MemberInfomationComponent implements OnInit {

    constructor(
        private _registrationService: RegistrationServiceComponent,
        private _cdRef: ChangeDetectorRef
    ) {

    }

    members;

    ngOnInit(): void {
        this._registrationService.getUserInfomation().then(res => {
            this.setUser(res);
            this._cdRef.detectChanges();
        });
    }


    setUser(userDatas) {
        const members = [];
        console.log(userDatas);
        userDatas.List.forEach((userData) => {
            members.push(userData);
        });

        this.members = members;
    }

}
