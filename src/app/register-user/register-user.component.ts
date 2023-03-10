import { identifierName } from '@angular/compiler';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {
constructor(private reg:ServicesService){
  this.countries();
}
regform:FormGroup=new FormGroup({
  cityId:new FormControl(),
  countryId:new FormControl(),
  dob:new FormControl('',Validators.required),
  email:new FormControl('',Validators.email),
  fname:new FormControl('',Validators.required),
  gender:new FormControl(),
  lname:new FormControl('',Validators.required),
  phno:new FormControl('',Validators.required),
  stateId:new FormControl()
})
registration()
{
  this.reg.userreg(this.regform.value).subscribe(res=>console.log(res));
}
countryoption:any;
countries()
{
  this.reg.getcountry().subscribe(res=>this.countryoption=res);
}
stateoption:any;
state(id:any)
{
  this.reg.getstate(id).subscribe(res=>{this.stateoption=res;
  console.log(res)});
}
cityoption:any;
city(id:any)
{
  this.reg.getcity(id).subscribe(res=>this.cityoption=res);
}
emailverify:any;
checkemail(mail:any)
{
  this.reg.getemail(mail).subscribe(res=>this.emailverify=res);
}









////////////////////////////////////////////////////////validation


get first()
{
  return this.regform.get('fname');
}
get last()
{
  return this.regform.get('lname');
}
get em()
{
  return this.regform.get('email');
}
get ph()
{
  return this.regform.get('phno');
}
get date()
{
  return this.regform.get('dob');
}
get coun()
{
  return this.regform.get('countryId');
}
}
