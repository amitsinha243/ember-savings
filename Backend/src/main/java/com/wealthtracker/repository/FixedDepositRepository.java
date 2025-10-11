package com.wealthtracker.repository;

import com.wealthtracker.model.FixedDeposit;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface FixedDepositRepository extends MongoRepository<FixedDeposit, String> {
    List<FixedDeposit> findByUserId(String userId);
}
