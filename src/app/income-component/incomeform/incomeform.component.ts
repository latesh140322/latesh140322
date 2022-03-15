import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-incomeform',
  templateUrl: './incomeform.component.html',
  styleUrls: ['./incomeform.component.scss']
})
export class IncomeformComponent implements OnInit {
  default_Rec = null;
  default_Serv = null;
  default_loc = null;
  default_evn = null;
  default_pyt = null;
  
  constructor() { }

  ngOnInit(): void {
  }
  onGenerateDLV(form : NgForm){
    console.log(form);
    
  }
}
