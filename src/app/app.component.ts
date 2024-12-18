import { Component, Input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserAppComponent } from "./components/user-app/user-app.component";
import { UserFormComponent } from "./components/user-form/user-form.component";
import { UserService } from './service/user.service';
import { User } from './service/user';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserAppComponent, UserFormComponent],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'Adoption-center';

  users:User[]=[];

  //Esto es para el seleccionar usuario
  userSelected:User;

  open:boolean = false;



  constructor(private service:UserService){
    this.userSelected = new User();
  }
  // Esto hace que al iniciar la app se carguen los usuarios
  ngOnInit(): void {
    this.service.findAll().subscribe(users =>this.users = users);
  }

    //Este evento corresponde al objeto usuario
  addUser(user:User){
    if(user.id > 0){
      //Si se cumple devolvemos el objeto modificado si no el actual
      this.users = this.users.map(u => (u.id == user.id) ? {...user} : u);
      //En caso de que el id no sea mayor que 0 se crea un nuevo usuario
    }else{
      this.users=[...this.users,{...user,id: new Date().getTime()}];
    }
    //Alerta que se muestra al actualizar o crear instalar el sweetalert2
    Swal.fire({
      title: "Saved",
      text: "User has been saved !",
      icon: "success"
    });
    this.userSelected = new User();
    this.setOpen();
  }
  
  //Este metodo eliminara el usuario
  removeUser(id:number):void{
    Swal.fire({
      title: "Are you sure want to delete this user?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.users = this.users.filter(user => user.id !=  id);
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success"
        });
      }
    });
  }

  //Evento para selecionar al usuario y mandarlo al formulario
  selectedUser(userRow:User):void{
    this.userSelected = {... userRow};
    this.open = true;
  }

  //Esto cambia de false a true el atributo
  setOpen(){
    this.open = !this.open;
  }

}
