import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignuUtilityService {

  constructor() { }
  print(Val: string,containerId:any){
    let element=document.createElement('li');
    element.innerText=Val
    document.getElementById(containerId)?.appendChild(element)
  }
}
