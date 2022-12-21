import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignuUtilityService } from 'src/app/app-services/designu-utility.service';

@Component({
  selector: 'app-form-event',
  templateUrl: './form-event.component.html',
  styleUrls: ['./form-event.component.css']
})
export class FormEventComponent implements OnInit ,AfterViewInit{
  print: any;

  constructor(private designUtility:DesignuUtilityService) { }

//Method 1st
//Method of using form-Event for creating observable stream

 @ViewChild('addbtn')
  addbtn!: ElementRef;

  ngOnInit(): void {

    }
  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addbtn.nativeElement,'click').subscribe(res=>{
      let countVal='video'+" "+ count++;
      // console.log('video'+ count++ )
      this.designUtility.print(countVal,'elContainer1');
      this.designUtility.print(countVal,'elContainer2');
    })

}

}
