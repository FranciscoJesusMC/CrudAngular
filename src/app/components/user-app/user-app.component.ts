import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../service/user';

@Component({
  selector: 'app-user-app',
  standalone: true,
  imports: [],
  templateUrl: './user-app.component.html'
})
export class UserAppComponent{
  title="List of users";

  // Recibe los usuarios del componente padre
  @Input() users:User[]=[];

  // Emite un evento al componente padre
  @Output() idUserEventEmitter = new EventEmitter();

  @Output() selectedUserEventEmitter = new EventEmitter();

  onRemoveUser(id:number):void{
    this.idUserEventEmitter.emit(id);
  }

   onSelectedUser(user:User):void{
    this.selectedUserEventEmitter.emit(user);
  } 

  }

  






