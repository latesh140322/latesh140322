import { Component, OnInit } from '@angular/core';
import { DLVDataService } from '../Services/dlv-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor( public dlv: DLVDataService) { }

  ngOnInit(): void {
    this.dlv.getDLV();
  }

}
