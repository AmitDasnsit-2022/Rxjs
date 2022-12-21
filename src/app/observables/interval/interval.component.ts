import { Component, OnInit } from '@angular/core';
import { interval, Subscription, timer } from 'rxjs';
import { DesignuUtilityService } from 'src/app/app-services/designu-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.css']
})
export class IntervalComponent implements OnInit {

  constructor(private designUtility:DesignuUtilityService) { }

   videoSubcription!: Subscription
   obsCreated:any;

  ngOnInit(): void {
    // const intervalmethod = interval(1000);
    const intervalmethod = timer(2000,1000);
    this.videoSubcription=intervalmethod.subscribe(res=>{
      console.log(res);
      this.obsCreated= 'video '+ res;
      this.designUtility.print(this.obsCreated,"intContainer")
      this.designUtility.print(this.obsCreated,"intContainer1")
      this.designUtility.print(this.obsCreated,"intContainer2")
      if(res>5){
        this.videoSubcription.unsubscribe();
      }
    })

  }



}
