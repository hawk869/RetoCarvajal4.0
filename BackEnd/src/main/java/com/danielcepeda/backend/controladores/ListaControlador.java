package com.danielcepeda.backend.controladores;

import com.danielcepeda.backend.entidades.ListaDeseo;
import com.danielcepeda.backend.repositorios.ListaRespositorio;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/lista")
public class ListaControlador {

    @Autowired
    ListaRespositorio listaRespositorio;

    @GetMapping
    public ResponseEntity<?> obtenerLista(){
        try {
            List<ListaDeseo> lista = listaRespositorio.findAll();
            if (lista.isEmpty()){
                return new ResponseEntity<>(HttpStatus.NO_CONTENT);
            }return new ResponseEntity<>(lista,HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    @PostMapping
    public ResponseEntity<?> crearLista(@RequestBody ListaDeseo listaDeseo){
        return new ResponseEntity<>(listaRespositorio.save(listaDeseo),HttpStatus.CREATED);
    }
    @PutMapping("/{id}")
    public ResponseEntity<?> actualizarLista(@PathVariable Integer id, @RequestBody ListaDeseo listaDeseo){
        ListaDeseo aux= listaRespositorio.findById(id).get();
        Optional<ListaDeseo> listaData =  Optional.of(aux);

        if (listaData.isPresent()) {
            ListaDeseo listaDeseo1 = listaData.get();
            listaDeseo1.setIdProducto(listaDeseo.getIdProducto());
            listaDeseo1.setNombreProducto(listaDeseo.getNombreProducto());
            listaDeseo1.setPrecio(listaDeseo.getPrecio());
            listaDeseo1.setCantidad(listaDeseo.getCantidad());

            return new ResponseEntity<>(listaRespositorio.save(listaDeseo1), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        }
    }
    @DeleteMapping("/{id}")
    public ResponseEntity<?> borrarLista(@PathVariable Integer id){
        try {
            listaRespositorio.deleteById(id);
            return new ResponseEntity<>(HttpStatus.ACCEPTED);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
