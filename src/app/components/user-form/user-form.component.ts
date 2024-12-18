import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../../service/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-form.component.html'
})
export class UserFormComponent {

  //Recibe los datos del padre al formulario
  @Input() user:User;
  // Emite un evento al padre
  @Output() newUserEventEmitter:EventEmitter<User> = new EventEmitter();

  constructor(){
    this.user = new User();
  }

  //Esto lo emite al componente padre
  onSubmit(userForm:NgForm):void{
    // Si es formulario es valido lo emite al padre
    if(userForm.valid){
      this.newUserEventEmitter.emit(this.user);
      console.log(this.user);
    }
    // Resetea y limpia el formulario
    userForm.reset();
    userForm.resetForm();
    }


}
