package com.wealthtracker.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Data
@Document(collection = "fixed_deposits")
public class FixedDeposit {
    @Id
    private String id;
    
    private String userId;
    private String bankName;
    private Double amount;
    private Double interestRate;
    private LocalDateTime maturityDate;
    
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
    
    public FixedDeposit() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }
}
