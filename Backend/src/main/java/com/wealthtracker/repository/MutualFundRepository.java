package com.wealthtracker.repository;

import com.wealthtracker.model.MutualFund;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MutualFundRepository extends MongoRepository<MutualFund, String> {
    List<MutualFund> findByUserId(String userId);
}
