import { Component, OnInit } from '@angular/core';
import {Producto} from "../modelo/producto";
import {ApiService} from "../api.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  producto : Producto = new Producto();
  producto2:any;

  constructor(private servicio:ApiService, private router:Router, private objetoHttp:HttpClient) { }

  ngOnInit(): void {
  }
  guardarProducto(){
    this.servicio.guardarProducto(this.producto).subscribe(dato =>{
      console.log(dato);
      this.irListaProductos();
    },error => console.log(error));
  }
  irListaProductos(){
    this.router.navigate(['/lista']);
  }
  onAgregar(){
    this.guardarProducto();
  }
  traerProducto(){
    this.objetoHttp.get("http://localhost:8080/catalogo/"+this.producto.idProducto)
      .subscribe(dato=>{
        this.producto2 = dato;
        this.producto.nombreProducto = this.producto2.nombreProducto;
        this.producto.precio = this.producto2.precio;
        this.producto.cantidad = this.producto2.cantidad;
      })

  }

}
