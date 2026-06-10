package com.upiiz.ajax.services;

import com.upiiz.ajax.entities.ProductosEntity;
import com.upiiz.ajax.repositories.ProductosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductosServiceImpl implements ProductosService {

    //CHEF
    @Autowired
    private ProductosRepository productoRepository;

    @Override
    public List<ProductosEntity> listado() {
        return productoRepository.findAll();
    }

    @Override
    public Optional<ProductosEntity> productoPorId(Long id) {
        return productoRepository.findById(id);
    }

    @Override
    public ProductosEntity agregarProducto(ProductosEntity producto) {
        return productoRepository.save(producto);
    }

    @Override
    public ProductosEntity actualizarProducto(Long Id, ProductosEntity producto) {
        producto.setId(Id);
        return productoRepository.save(producto);
    }

    @Override
    public void eliminarProducto(Long id) {
        productoRepository.deleteById(id);
    }
}
