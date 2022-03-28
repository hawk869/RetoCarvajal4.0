import {Component, OnDestroy, OnInit } from '@angular/core';
import {Producto} from "../modelo/producto";
import {Subject} from "rxjs";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.css']
})
export class WishlistComponent implements OnDestroy, OnInit {


  dtOptions: DataTables.Settings = {};
  productos:Producto[];
  dtTrigger: Subject<any> = new Subject<any>();
  constructor(private service:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      responsive: true,
      language:{
        url: '//cdn.datatables.net/plug-ins/1.11.5/i18n/es-ES.json'
      }
    };

    this.obtenerLista()
  }

  private obtenerLista(){

    this.service.obtenerLista().subscribe(dato=>{
      this.productos = dato;
      this.dtTrigger.next(this.dtOptions);
    });
  }
  borrarProducto(id:number){
    this.ngOnDestroy();
    this.service.eliminarProducto(id).subscribe(dato=>{
      console.log(dato);
      this.obtenerLista();
    });

  }
  alerta(){
    Swal.fire('No tenemos existencias')
  }

  ngOnDestroy(): void{
    this.dtTrigger.unsubscribe();
  }
}
