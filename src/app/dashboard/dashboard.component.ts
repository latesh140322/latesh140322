import { DLVDataService } from '../Services/dlv-data.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  default_Type = null;
  constructor(private route: Router) { }

  ngOnInit(): void {

  }

  onRoute(formValues : NgForm){
    const route = formValues.value.type_DLV;
    if(route){
      this.route.navigate([`${route}`]);
    }else{
      console.log("under development");
      
    }
    console.log(formValues.value);
    
  }
}
