export class Student{
  id:number;
  username:string;
  password:string;
  email:string;
  address:string;

  constructor(id:number,username:string,password:string, email:string, address:string,){
    this.id=id;
    this.username=username;
    this.password=password;
    this.email=email;
    this.address=address;
  }
}
