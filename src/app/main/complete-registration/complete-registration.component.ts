import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-complete-registration',
  templateUrl: './complete-registration.component.html',
  styleUrls: ['./complete-registration.component.css']
})
export class CompleteRegistrationComponent implements OnInit {

  constructor(private http: HttpClient) {
    this.sendserver();
   }

  ngOnInit() {
    console.log('aaa');
  }


  sendserver() {
    console.log('サーバーに送る');
    this.http.get('api/character').toPromise().then((res) => {
      console.log(res);
    });
  }

}
