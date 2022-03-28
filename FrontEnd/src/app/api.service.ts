import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Producto} from "./modelo/producto";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  urlApi = "http://localhost:8080/";
  constructor(private objetoHttp: HttpClient) { }

  obtnerProductos(): Observable<Producto[]>{
    return this.objetoHttp.get<Producto[]>(`${this.urlApi+"catalogo"}`);
  }
  obtenerLista(): Observable<Producto[]>{
    return this.objetoHttp.get<Producto[]>(`${this.urlApi+"lista"}`);
  }
  guardarProducto(producto:Producto):Observable<Object>{
    return this.objetoHttp.post(`${this.urlApi+"lista"}`,producto);
  }
  eliminarProducto(id:number): Observable<Object>{
    return this.objetoHttp.delete(`${this.urlApi+"lista"}/${id}`);
  }
}
