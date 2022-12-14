import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DetallesComponent } from 'src/app/componentes/detalles/detalles.component';
import { Cubos, RespuestaDB } from 'src/app/interfaces/interfaces';
import { CubosService } from '../../services/cubos.service';
@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.page.html',
  styleUrls: ['./nosotros.page.scss'],
})
export class NosotrosPage implements OnInit {
  CubosRecientes:Cubos[]=[] ;
  opcionesSlide={
    slidesPerView:4.5,
    freeMode:true
    }

  constructor(private servicioCubos:CubosService,private modalCtrl:ModalController) { }
  async verDetalle(id: number){
 
    const modal= await this.modalCtrl.create({
    component:DetallesComponent,
    componentProps:{id}
    });
    modal.present();
    }
  ngOnInit() {
    this.servicioCubos.getDatos()
    .subscribe((resp:RespuestaDB)=>{//1
    console.log('Cubos',resp)
    this.CubosRecientes=resp.Cubos;
  })
}}
