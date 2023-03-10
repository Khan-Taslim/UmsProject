import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private service:ServicesService){}
  register=new FormGroup({
    email:new FormControl('',Validators.email),
    pwd:new FormControl('',Validators.required)
  })
  senddata()
  {
    this.service.postdata(this.register.value).subscribe(res=>console.log(res));
  }
  get t()
  {
    return this.register.get('email');
  }
  get a()
  {
    return this.register.get('pwd');
  }  
}
