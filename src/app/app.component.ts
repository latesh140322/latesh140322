
import { Component } from '@angular/core';
import { SharedService } from './Services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
 
  constructor(public sharedService: SharedService){}
  ngOnInit(): void {
    this.sharedService.getSiteContent();
  }
}
