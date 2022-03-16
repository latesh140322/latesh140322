import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-incomeform',
  templateUrl: './incomeform.component.html',
  styleUrls: ['./incomeform.component.scss']
})

export class IncomeformComponent implements OnInit {
  // default_Rec = null;
  // default_Serv = null;
  // default_loc = null;
  // default_evn = null;
  // default_pyt = null;
  
  myGenerateDLV: FormGroup | undefined;
  incomeFormSubMitted:boolean=false;
  constructor(private fb : FormBuilder) { }

    
  ngOnInit(): void {
    this.myGenerateDLV = this.fb.group({
      'serviceReceiver': [null, Validators.required],  //
      'department' : ["", Validators.required],
      'validDate' : ["", Validators.required],
      'tillDate' : ["",],
      'costCenter' : ["", Validators.required],
      'preparedBy' : ["", Validators.required],
      'descService' : ["",],
      'scopeService' : ["", Validators.required],
      'uploadScope' : ["", Validators.required],
      'consideration' : ["", Validators.required],
      'uploadCod' : ["", Validators.required],
      'gst' : ["", [Validators.required, Validators.pattern('[0-9]+(\.[0-9]{1,2})?%?')]],
      'gstAmount' : ["", [Validators.required,Validators.pattern("[0-9]+(\.[0-9]{1,2})")]],
      'INR' : ["INR", Validators.required],
      'SAVWIPLName' : ["", Validators.required],
      'email' : ["", [Validators.required, Validators.pattern( "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      'receiverName' : ["", Validators.required],
      'receiverEmail' : ["", [,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      'additionalClu' : ["",],
      'natureTran' : ["", Validators.required],
      'mentionRes' : ["", Validators.required],
      'panCard' : ["", [Validators.required,Validators.pattern("[A-Z]{5}[0-9]{4}[A-Z]{1}")]],
      'funService' : [null, Validators.required], //
      'locationGod' : [null, Validators.required], //   
      'placeEvent' : [null, Validators.required],//
      'eventOrg' : ["", Validators.required],
      'thirdParty': [null, Validators.required],//
    })
  }
  onGenerateDLV(form : NgForm){
         console.log(this.myGenerateDLV?.invalid);
    if(this.myGenerateDLV?.invalid)
    {
        this.incomeFormSubMitted = true;
        console.log('in-valid form ',this.myGenerateDLV?.value);
        
    }else {
      this.incomeFormSubMitted = false;
      console.log('valid form ',this.myGenerateDLV?.value);
    }
  }

  onCek(department : FormControl){
    console.log(department);
    console.log(this.myGenerateDLV);
    console.log(this.myGenerateDLV);

    
  }
}
