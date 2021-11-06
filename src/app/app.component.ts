import { Component } from '@angular/core';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }

  componentes: Componente[] = [
    {
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/descripcion'
    },
    {
      icon: 'log-in-outline',
      name: 'Registro',
      redirecTo: '/input'
    },
    {
      icon: 'newspaper-outline',
      name: 'Noticias',
      redirecTo: '/noticias'
    },
    {
      icon: 'information-circle-outline',
      name: 'Datos',
      redirecTo: '/datos'
    }

  ];

}


