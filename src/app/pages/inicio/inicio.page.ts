import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

interface Componente {
  icon: string;
  name: string;
  redirecTo: string;
}


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})

export class InicioPage implements OnInit {

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

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu() {
    this.menuController.open('first');
  }
}



