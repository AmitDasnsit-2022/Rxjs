import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { DesignuUtilityService } from 'src/app/app-services/designu-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.css']
})
export class OfFromComponent implements OnInit {

  obsMsg!:any

  constructor(private designutlity:DesignuUtilityService) { }
  ngOnInit(): void {

    //of Operator

    const obs1= of('Anup', 'Soni' ,'Vikalp', 'Amit')
    obs1.subscribe(res=>{
      // console.log(res);
      this.designutlity.print(res,'ofContainer')
    })

    const obs2= of({a:'Anup', b:'Soni' ,c:'Vikalp', d:'Amit'})
    obs2.subscribe(res=>{

      this.obsMsg=res
      // console.log("obs2=> " ,res);

    })

    //From operator
    //Ex-1 With Array
    const obs3= from(['Alex', 'Maartin' ,'Andrew', 'John'])
    obs3.subscribe(res=>{
      // console.log(res);
      this.designutlity.print(res,'fromContainer3')
    })

    //Ex-2 With Promise
    const promise =  new Promise(resolve=>{
      // console.log('promise resolved');
      setTimeout(()=>{
        resolve('Promise Resolved')
      },2000)

    })
    const obs4= from(promise)
    obs4.subscribe(res=>{
      console.log("From promise => ",res);
      //  this.designutlity.print(,'fromContainer4');
      // this.designutlity.print( res ,'fromContainer4')
    })
    const obs5= from("Welcome Home")
    obs5.subscribe(res=>{
      console.log("From String => ",res);
      //  this.designutlity.print(,'fromContainer4');
      // this.designutlity.print( res ,'fromContainer4')
      this.designutlity.print(res,'fromContainer5')
    })


  }

}

