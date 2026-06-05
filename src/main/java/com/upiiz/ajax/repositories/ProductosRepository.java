package com.upiiz.ajax.repositories;

import com.upiiz.ajax.entities.ProductosEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProductosRepository extends JpaRepository<ProductosEntity,Long> {
}
