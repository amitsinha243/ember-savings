package com.wealthtracker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "savings_accounts")
public class SavingsAccount {
    @Id
    private String id;
    
    private String userId;
    private String bankName;
    private String accountNumber;
    private Double balance;
    private Double interestRate;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    public SavingsAccount() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
