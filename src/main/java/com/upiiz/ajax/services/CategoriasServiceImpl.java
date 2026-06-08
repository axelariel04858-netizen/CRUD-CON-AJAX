package com.upiiz.ajax.services;

import com.upiiz.ajax.entities.CategoriasEntity;
import com.upiiz.ajax.repositories.CategoriasRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class CategoriasServiceImpl implements CategoriasService {

    @Autowired
    private CategoriasRepository categoriaRepository;

    @Override
    public List<CategoriasEntity> listadoCategorias() {
        return categoriaRepository.findAll();
    }

    @Override
    public Optional<CategoriasEntity> categoriaPorId(Long id) {
        return categoriaRepository.findById(id);
    }

    @Override
    public CategoriasEntity agregarCategoria(CategoriasEntity categoria) {
        return categoriaRepository.save(categoria);
    }

    @Override
    public CategoriasEntity actualizarCategoria(Long id, CategoriasEntity categoria) {
        categoria.setId(id);
        return categoriaRepository.save(categoria);
    }

    @Override
    public void eliminarCategoria(Long id) {
        categoriaRepository.deleteById(id);
    }
}