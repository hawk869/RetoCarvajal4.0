import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ProductoComponent} from "./producto/producto.component";
import {WishlistComponent} from "./wishlist/wishlist.component";
import {AgregarComponent} from "./agregar/agregar.component";

const routes: Routes = [
  {path : 'productos',component:ProductoComponent},
  {path : '',redirectTo:'productos',pathMatch:'full'},
  {path : 'lista', component:WishlistComponent},
  {path : 'agregar', component:AgregarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
