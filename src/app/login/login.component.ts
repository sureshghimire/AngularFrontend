import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  title = 'aprilWebAngularProject';
  message:string="NA";
  num1:number=100;

 listOfStudent:Student[]=[];

  id:number=1;
  username:string="jitendra";
  password:string="java";
  email:string="jitendra@gmail.com";
  address:string="india";

  constructor(private router:Router) {

  }


  public validate() : void {
    this.message="Hello username and password are valid!";
    console.log("hello world")
}

public tclear() : void {
  this.message="";
}

public  showData(){
  console.log(this.username);
  console.log(this.password);
 if("jitendra"==this.username && "java"==this.password){
     this.router.navigate(['/home']);
 }else{
    this.message="username and password is incorrect";
 }
}


}
