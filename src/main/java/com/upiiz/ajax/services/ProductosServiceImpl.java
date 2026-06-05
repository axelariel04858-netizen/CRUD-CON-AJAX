package com.upiiz.ajax.services;

import com.upiiz.ajax.entities.ProductosEntity;
import com.upiiz.ajax.repositories.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductosServiceImpl implements ProductosService {

    //CHEF
    @Autowired
    private ProductosRepository productosRepository;

    @Override
    public List<ProductosEntity> listado() {
        return productosRepository.findAll();
    }

    @Override
    public ProductosEntity productoPorId(Long id) {
        return null;
    }

    @Override
    public ProductosEntity agregarProducto(ProductosEntity productos) {
        return productosRepository.save(productos);
    }

    @Override
    public ProductosEntity actualizarProducto(Long id, ProductosEntity productos) {
        return null;
    }

    @Override
    public Void eliminarProdcuto(Long id) {
        return null;
    }
}
