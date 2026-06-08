package com.upiiz.ajax.repositories;

import com.upiiz.ajax.entities.CategoriasEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CategoriasRepository extends JpaRepository<CategoriasEntity, Long> {
}