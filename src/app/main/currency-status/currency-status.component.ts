import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-currency-status',
  templateUrl: './currency-status.component.html',
  styleUrls: ['./currency-status.component.css']
})
export class CurrencyStatusComponent implements OnInit {

  @Input() selectedPage: number;

  constructor() { }

  ngOnInit() {
  }

}
