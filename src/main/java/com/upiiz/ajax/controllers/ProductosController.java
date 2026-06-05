package com.upiiz.ajax.controllers;

import com.upiiz.ajax.entities.ProductosEntity;
import com.upiiz.ajax.services.ProductosService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
public class ProductosController {

    //QUE INYECTAMOS
    @Autowired
    private ProductosService productosService;

    @GetMapping("/productos")
    public String Productos(){
        return "productos";
    }


    //USANDO AJAX
    //R - READ - LISTADO PRODUCTOS USANDO AJAX
    @GetMapping("/productos/api/productos")
    @ResponseBody
    public ResponseEntity<List<ProductosEntity>> listadoProductosAJAX(){return ResponseEntity.ok(productosService.listado());}


    //R - LEER UN SOLO PRODUCTO USANDO AJAX
    @GetMapping("/productos/api/productos/{id}")
    @ResponseBody
    public String productosByIdAJAX(@PathVariable Long id){return "Producto por id";}


    //C - CREATE - CREAR PRODUCTO USANDO AJAX
    @PostMapping("/productos/api/productos")
    @ResponseBody
    public ResponseEntity<ProductosEntity> crearProductosAJAX(@RequestBody ProductosEntity productos){
        return ResponseEntity.ok(productosService.agregarProducto(productos));
    }


    //U - UPDATE - ACTUALIZAR PRODUCTO USANDO AJAX
    @PatchMapping("/productos/api/productos/{id}")
    @ResponseBody
    public String actualizarProductosAJAX(@PathVariable Long id, @RequestBody ProductosEntity productos){return "Producto Actualizado";}


    //D - DELETE - ELIMINAR UN PRODUCTO USANDO AJAX
    @DeleteMapping("productos/api/productos/{id}")
    @ResponseBody
    public String eliminarProductosAJAX(@PathVariable Long id){return  "Producto Eliminado";}

}
