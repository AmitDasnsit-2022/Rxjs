import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription, take, toArray } from 'rxjs';
import { DesignuUtilityService } from 'src/app/app-services/designu-utility.service';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.css']
})
export class ToArrayComponent implements OnInit {

  users=[{Name:'Amit',Skill:'JS'},
         {Name:'Anujit',Skill:'Angular'}]

  constructor(private designutility:DesignuUtilityService) { }
  sourceHub!:Subscription

  ngOnInit(): void {

    //Example -01
    const source = interval(100);
    this.sourceHub=source.pipe(
      take(6),
      toArray()
    )
    .subscribe(res=>{
      // console.log(res);
      // this.designutility.print(,'toarray')

      // if(res>9){
      //   this.sourceHub.unsubscribe();
      // }

      //Example-02
      const source2=from(this.users)
      source2.pipe(toArray()).subscribe(res=>{
        console.log(res);

      })

      //Example-03
      const source3=of('Html','css','Js')
      source3.pipe(toArray()).subscribe(res=>{
        console.log(res);

      })



    })
  }

}
