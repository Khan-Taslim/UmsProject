import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent {
  constructor(private fp:ServicesService){}
  pass=new FormGroup({
    emailId:new FormControl()
  })
  getpassword()
  { 
    this.fp.getpass(this.pass.value.emailId).subscribe(res=>console.log(res));
  }
}
