package com.upiiz.ajax.services;

import com.upiiz.ajax.entities.ProductosEntity;

import java.util.List;

public interface ProductosService {

    //METODOS - MENU DE OPCIONES
    List<ProductosEntity> listado();
    ProductosEntity productoPorId(Long id);
    ProductosEntity agregarProducto(ProductosEntity productos);
    ProductosEntity actualizarProducto(Long id, ProductosEntity productos);
    Void eliminarProdcuto(Long id);

}
