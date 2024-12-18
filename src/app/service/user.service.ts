import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users:User[] =[{
    id:1,
    name:'Francisco',
    lastname:'Macullunco',
    email:'macullunco@gmail.com',
    username:'rukero',
    password:'123456'
  },
  {
    id:2,
    name:'Ricardo',
    lastname:'Rojas',
    email:'rojas@gmail.com',
    username:'itachi',
    password:'123456'
  },{
    id:3,
    name:'Alberto',
    lastname:'del rio',
    email:'alberto@gmail.com',
    username:'albertito',
    password:'123456'
  },
];
  constructor() { }

  findAll(): Observable<User[]>{
    return of(this.users)
  }
}
