package com.upiiz.ajax.services;

import com.upiiz.ajax.entities.CategoriasEntity;

import java.util.List;
import java.util.Optional;

public interface CategoriasService {
    List<CategoriasEntity> listadoCategorias();
    Optional<CategoriasEntity> categoriaPorId(Long id);
    CategoriasEntity agregarCategoria(CategoriasEntity categoria);
    CategoriasEntity actualizarCategoria(Long id, CategoriasEntity categoria);
    void eliminarCategoria(Long id);
}