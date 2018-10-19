import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-currency-status',
  templateUrl: './currency-status.component.html',
  styleUrls: ['./currency-status.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CurrencyStatusComponent implements OnInit {

  @Input() selectedPage: number;

  constructor() { }

  ngOnInit() {
  }

}
