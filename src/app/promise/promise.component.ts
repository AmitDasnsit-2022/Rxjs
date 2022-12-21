import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  dellLaptop(){
   return true
  }
  hpLaptop(){
    return false
  }
  promiseValue: any;

  ngOnInit(): void {
    let buyLaptop= new Promise((Resolve,Reject)=>{
      // Resolve("Promise is resolve");
      // Reject("Promise is rejected")
      if(this.dellLaptop())
      {
        return setTimeout(()=>{
          Resolve("Dell laptop purchased")
        },4000)

      }
      else if(this.hpLaptop()){
        return setTimeout(()=>{
          Resolve("Hp Laptop is purchased")
        },5000)


      }
      else{
        return setTimeout(()=>{
          Reject("None of them is available")
        },5000)
      }
      })
      buyLaptop.then((res)=>{
        console.log("Its working = ",res)
        this.promiseValue=res;
      }).catch((res)=>{
        console.log("Its Not working =",res);
        this.promiseValue=res;
      })

  }
}
