package com.upiiz.ajax.services;

import com.upiiz.ajax.entities.ProductosEntity;

import java.util.List;
import java.util.Optional;

public interface ProductosService {

    //METODOS - MENU DE OPCIONES
    List<ProductosEntity> listado();
    Optional<ProductosEntity> productoPorId (Long id);
    ProductosEntity agregarProducto (ProductosEntity producto);
    ProductosEntity actualizarProducto(Long id,ProductosEntity producto);
    void eliminarProducto (Long id);

}
