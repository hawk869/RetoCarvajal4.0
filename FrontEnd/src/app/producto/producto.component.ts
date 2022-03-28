import { Component, OnDestroy, OnInit } from '@angular/core';
import {Producto} from "../modelo/producto";
import {Subject} from "rxjs";
import {ApiService} from "../api.service";

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  productos:Producto[];
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private servicio: ApiService) { }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true,
      language:{
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json'
      }
    };
    this.obtenerProductos()
  }
  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }
  private obtenerProductos(){
    this.servicio.obtnerProductos().subscribe(dato=>{
      this.productos = dato;
      this.dtTrigger.next(this.dtOptions);
    });
  }
}
