import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private eserv:HttpClient) { }
  // login
  postdata(body:any)
  {
   return this.eserv.post(`http://15.206.171.20:9090/login`,body,{responseType:'text'});
  }
  
  // reg
  userreg(body:any)
  {
   return this.eserv.post(`http://15.206.171.20:9090/saveUser`,body,{responseType:'text'})
  }
  getcountry()
  {
   return this.eserv.get(`http://15.206.171.20:9090/countries`)
  }
  getstate(countryId:any)
  {
    return this.eserv.get(`http://15.206.171.20:9090/states/${countryId}  `)
  }
  getcity(stateId:any)
  {
    return this.eserv.get(`http://15.206.171.20:9090/cities/${stateId}`)
  }
  getemail(mail:any)
  {
    return this.eserv.get(`http://15.206.171.20:9090/emailcheck/${mail}`,{responseType:'text'})
  }


  // unlock acc

  pdata(body:any)
  {
    return this.eserv.post(`http://15.206.171.20:9090/unlock`,body,{responseType:'text'});
  }



  //forgot pass

  getpass(mail:any)
  {
    return this.eserv.get(`http://15.206.171.20:9090/forgotPwd/${mail}`,{responseType:'text'});
  }
}










