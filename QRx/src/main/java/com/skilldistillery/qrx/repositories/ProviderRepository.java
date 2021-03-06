package com.skilldistillery.qrx.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.skilldistillery.qrx.entities.Provider;

public interface ProviderRepository extends JpaRepository<Provider, Integer> {

    List<Provider> findByOrganization(String keyword);
    
    Provider findByUser_username(String username);
    
}
