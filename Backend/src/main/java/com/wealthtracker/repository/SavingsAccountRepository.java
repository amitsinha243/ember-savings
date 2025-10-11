package com.wealthtracker.repository;

import com.wealthtracker.model.SavingsAccount;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SavingsAccountRepository extends MongoRepository<SavingsAccount, String> {
    List<SavingsAccount> findByUserId(String userId);
}
