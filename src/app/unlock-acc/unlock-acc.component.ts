import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-unlock-acc',
  templateUrl: './unlock-acc.component.html',
  styleUrls: ['./unlock-acc.component.css']
})
export class UnlockAccComponent {
  constructor(private UA:ServicesService){

  }
  ul:FormGroup=new FormGroup({
    email:new FormControl('',Validators.email),
    tempPwd:new FormControl('',Validators.required),
    confirmPwd:new FormControl('',Validators.required),
    newPwd:new FormControl('',Validators.required)
  })
  ////////////////////////////// crud operation
  savedata()
  {
    this.UA.pdata(this.ul.value).subscribe(res=>console.log(res));
  }

  //////////////////////////////////////validations
  get em()
  {
    return this.ul.get('email');
  }
  get tpass()
  {
    return this.ul.get('tempPwd');
  }
  get Npass()
  {
    return this.ul.get('newPwd');
  }
  get Cpass()
  {
    return this.ul.get('confirmPwd');
  }
}




